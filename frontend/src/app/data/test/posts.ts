import { PostAskMe, PostCommunity, PostCommunityView } from "src/app/types/post"

export const testAskMe: PostAskMe[] = [
  {
    id: 1,
    user: {
      id: 1,
      name: 'John',
      job: 'Software Engineer',
      description: 'I love building innovative solutions for businesses.',
      color: 'primary',
      location: 'Graz',
      achievements: [
        {
          id: 1,
          name: 'Answered 100 questions',
          icon: 'help'
        },
        {
          id: 2,
          name: 'Incredible knowlege',
          icon: 'flask'
        }
      ]
    }
  },
  {
    id: 2,
    user: {
      id: 2,
      name: 'Jane',
      job: 'Product Manager',
      description: 'I work on innovative products that help businesses achieve their goals.',
      color: 'light',
      location: 'Vienna',
      achievements: [
        {
          id: 2,
          name: 'Quick responder',
          icon: 'rocket'
        }
      ]
    }
  },
  {
    id: 3,
    user: {
      id: 3,
      name: 'Mike',
      job: 'Marketing Manager',
      description: 'I focus on creating engaging and effective marketing campaigns to help businesses grow.',
      color: 'dark',
      location: 'London',
      achievements: []
    }
  },
  {
    id: 4,
    user: {
      id: 4,
      name: 'Sarah',
      job: 'UX/UI Designer',
      description: 'I specialize in creating intuitive and user-friendly interfaces for businesses.',
      color: 'danger',
      location: 'Paris',
      achievements: []
    }
  }
]

export const testViewPost: PostCommunityView = {
  id: 1,
  user: {
    id: 1,
    name: 'John'
  },
  title: 'How to become a successful entrepreneur',
  content: 'I started my journey as an entrepreneur by identifying problems I was passionate about solving. With no initial resources, I focused on learning, networking, and taking small, consistent steps. Over time, these efforts grew into a thriving business, and I’m excited to share my experiences and lessons with you.',
  categories: [
    {
      name: 'ama',
      label: 'Ask Me Anything',
    },
    {
      name: 'job',
      label: 'Job',
    }
  ],
  color: 'primary'
};

export const testCommunity: PostCommunity[] = [
    {
      id: 1,
      user: {
        id: 10,
        name: 'John'
      },
      title: 'How to become a successful entrepreneur',
      preview: 'This guide will help you build a successful business from scratch.',
      categories: [
        {
          name: 'ama',
          label: 'Ask Me Anything',
        },
        {
          name: 'job',
          label: 'Job',
        }
      ],
      color: 'primary'
    },
    {
      id: 2,
      user: {
        id: 1,
        name: 'Jane'
      },
      title: 'The importance of networking',
      preview: 'Discover how networking can help you grow and build your network.',
      categories: [
        {
          name: 'ama',
          label: 'Ask Me Anything',
        },
      ],
      color: 'secondary'
    },
    {
      id: 3,
      user: {
        id: 2,
        name: 'Mike'
      },
      title: 'I was in the psychiatry for two months',
      preview: 'When I was 14 years old I lived for two months in a psychiatry and shared together with ...',
      categories: [
        {
          name: 'ama',
          label: 'Ask Me Anything',
        }
      ],
      color: 'tertiary'
    },
    {
      id: 4,
      user: {
        id:3,
        name: 'Emily'
      },
      title: 'The world of fashion',
      preview: 'I started my fashion journey when I was 18 years old. I have been wearing clothes for 20 years now.',
      categories: [
        {
          name: 'ama',
          label: 'Ask Me Anything',
        },
        {
          name: 'fashion',
          label: 'Fashion',
        }
      ],
      color: 'success'
    }
];