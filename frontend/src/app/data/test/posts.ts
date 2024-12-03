import { Post, PostView } from "src/app/types/post";

export const testPostView: PostView = {
  id: 1,
  user: {
    id: 1,
    name: 'John',
    job: 'Entrepreneur'
  },
  title: 'How to become a successful entrepreneur',
  content: 'I started my journey as an entrepreneur by identifying problems I was passionate about solving. With no initial resources, I focused on learning, networking, and taking small, consistent steps. Over time, these efforts grew into a thriving business, and I’m excited to share my experiences and lessons with you.',
  actions: {
    comments: 10,
    likes: 10
  },
  color: 'primary'
};

export const testPosts: Post[] = [
    {
      id: 1,
      user: {
        id: 10,
        name: 'John',
        job: 'Entrepreneur'
      },
      title: 'How to become a successful entrepreneur',
      preview: 'This guide will help you build a successful business from scratch.',
      actions: {
        comments: 10,
        likes: 10
      },
      color: 'primary'
    },
    {
      id: 2,
      user: {
        id: 1,
        name: 'Jane',
        job: 'Social Media Manager'
      },
      title: 'The importance of networking',
      preview: 'Discover how networking can help you grow and build your network.',
      actions: {
        comments: 10,
        likes: 10
      },
      color: 'secondary'
    },
    {
      id: 3,
      user: {
        id: 2,
        name: 'Mike',
        job: 'Psychologist'
      },
      title: 'I was in the psychiatry for two months',
      preview: 'When I was 14 years old I lived for two months in a psychiatry and shared together with ...',
      actions: {
        comments: 10,
        likes: 10
      },
      color: 'tertiary'
    },
    {
      id: 4,
      user: {
        id:3,
        name: 'Emily',
        job: 'Designer'
      },
      title: 'The world of fashion',
      preview: 'I started my fashion journey when I was 18 years old. I have been wearing clothes for 20 years now.',
      actions: {
        comments: 10,
        likes: 10
      },
      color: 'success'
    }
];