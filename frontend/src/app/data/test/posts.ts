import { Post, PostView } from "src/app/types/post";

export const testPostView: PostView = {
  id: 1,
  user: {
    id: 1,
    name: 'John',
    job: 'Entrepreneur'
  },
  liked: false,
  anonymous: false,
  title: 'How to become a successful entrepreneur',
  content: 'I started my journey as an entrepreneur by identifying problems I was passionate about solving. With no initial resources, I focused on learning, networking, and taking small, consistent steps. Over time, these efforts grew into a thriving business, and I’m excited to share my experiences and lessons with you.',
  actions: {
    comments: 10,
    likes: 10
  },
  category: {
    id: 1,
    name: 'work',
    label: 'Work',
    color: "secondary"
  },
  comments: [
    {
      id: 1,
      user: {
        id: 1,
        name: 'Jane',
        job: 'Social Media Manager'
      },
      content: 'I agree with John, the key is to stay consistent and learn from your mistakes.',
      likes: 5,
      liked: false,
      anonymous: false,
      star: true
    },
    {
      id: 2,
      user: {
        id: 2,
        name: 'John',
        job: 'Content Creator'
      },
      content: 'Persistence and engaging with your audience are critical for success in any field.',
      likes: 12,
      liked: false,
      anonymous: true,
      star: false
    },
    {
      id: 3,
      user: {
        id: 3,
        name: 'Emily',
        job: 'Marketing Specialist'
      },
      content: 'I think having a clear goal and strategy helps streamline the process.',
      likes: 8,
      liked: false,
      anonymous: true,
      star: false
    },
    {
      id: 4,
      user: {
        id: 4,
        name: 'Michael',
        job: 'Graphic Designer'
      },
      content: 'Visual consistency can greatly enhance your brand identity.',
      likes: 10,
      liked: false,
      anonymous: true,
      star: false
    },
    {
      id: 5,
      user: {
        id: 5,
        name: 'Sophia',
        job: 'SEO Expert'
      },
      content: 'Don’t forget to optimize for search engines; it makes a world of difference.',
      likes: 6,
      liked: false,
      anonymous: true,
      star: false
    }
  ]
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
      liked: true,
      actions: {
        comments: 10,
        likes: 10
      },
      category: {
        id: 1,
        name: 'work',
        label: 'Work',
        color: "primary"
      },
      anonymous: false
    },
    {
      id: 2,
      user: {
        id: 1,
        name: 'Jane',
        job: 'Social Media Manager'
      },
      liked: false,
      title: 'The importance of networking',
      preview: 'Discover how networking can help you grow and build your network.',
      actions: {
        comments: 10,
        likes: 10
      },
      category: {
        id: 2,
        name: 'job_hunt',
        label: 'Job Hunt',
        color: "secondary"
      },
      anonymous: true
    },
    {
      id: 3,
      user: {
        id: 2,
        name: 'Mike',
        job: 'Psychologist'
      },
      title: 'I was in the psychiatry for two months',
      liked: false,
      preview: 'When I was 14 years old I lived for two months in a psychiatry and shared together with ...',
      actions: {
        comments: 10,
        likes: 10
      },
      category: {
        id: 1,
        name: 'work',
        label: 'Work',
        color: "tertiary"
      },
      anonymous: true
    },
    {
      id: 4,
      user: {
        id:3,
        name: 'Emily',
        job: 'Designer'
      },
      title: 'The world of fashion',
      liked: false,
      preview: 'I started my fashion journey when I was 18 years old. I have been wearing clothes for 20 years now.',
      actions: {
        comments: 10,
        likes: 10
      },
      category: {
        id: 1,
        name: 'work',
        label: 'Work',
        color: "primary"
      },
      anonymous: true
    }
];