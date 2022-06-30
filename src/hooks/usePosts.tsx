import {
  PropsWithChildren,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { ref, onValue, push, update } from "firebase/database";
import { v4 as uuid } from "uuid";

import { Post } from "src/schema/entities";
import { storage, database } from "src/utils/firebase";

export type PostsType = {
  posts: Post[];
  createPost: (
    post: Omit<Post, "id" | "mediaUrl"> & {
      file: File | null;
    }
  ) => void;
  toggleLike: (userId: string, post: Post) => void;
};

export const PostsContext = createContext<PostsType>(null!);

export function PostsProvider(props: PropsWithChildren<{}>) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const postsRef = ref(database, "posts");

    onValue(postsRef, (snapshot) => {
      const snapshotVal = snapshot.val();

      if (snapshotVal) {
        setPosts(Object.values(snapshotVal));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function createPost(
    post: Omit<Post, "id" | "mediaUrl"> & {
      file: File | null;
    }
  ) {
    const postsRef = ref(database, "posts");

    const key = push(postsRef, {
      createdAt: post.createdAt,
      likesByUserId: post.likesByUserId,
      likesCount: post.likesCount,
      text: post.text,
    }).key;

    const postRef = ref(database, `posts/${key}`);

    update(postRef, { id: key });

    if (post.file) {
      const mediaRef = storageRef(storage, uuid());

      uploadBytes(mediaRef, post.file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          update(postRef, { mediaUrl: downloadURL });
        });
      });
    }
  }

  function toggleLike(userId: string, post: Post) {
    const postRef = ref(database, `posts/${post.id}`);

    const hasUserLike = !!post.likesByUserId[userId];

    return update(postRef, {
      likesCount: hasUserLike ? post.likesCount - 1 : post.likesCount + 1,
      likesByUserId: {
        ...post.likesByUserId,
        [userId]: hasUserLike ? !hasUserLike : true,
      },
    });
  }

  return (
    <PostsContext.Provider value={{ posts, createPost, toggleLike }}>
      {props.children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  return useContext(PostsContext);
}
