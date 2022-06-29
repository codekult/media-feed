import { PropsWithChildren, createContext, useState, useContext } from "react";

import { Post } from "src/schema/entities";

export type PostsType = {
  posts: Post[];
  addPost: (post: Post) => void;
  toggleLike: (userId: string, postId: string) => void;
};

export const PostsContext = createContext<PostsType>(null!);

export function PostsProvider(props: PropsWithChildren<{}>) {
  const [posts, setPosts] = useState<Post[]>([]);

  function addPost(post: Post) {
    setPosts((posts) => [...posts, post]);
  }

  function toggleLike(userId: string, postId: string) {
    setPosts((posts) =>
      posts.map((post) => {
        if (post.id === postId) {
          if (post.likes.includes(userId)) {
            return {
              ...post,
              likes: post.likes.filter((currUserId) => currUserId !== userId),
            };
          }

          return { ...post, likes: [...post.likes, userId] };
        }

        return post;
      })
    );
  }

  return (
    <PostsContext.Provider value={{ posts, addPost, toggleLike }}>
      {props.children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  return useContext(PostsContext);
}
