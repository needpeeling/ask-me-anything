import { User } from "src/app/types/user";

export const testUser: User = {
    id: 1,
    name: 'Martin Gius',
    job: 'Web Developer',
    description: 'I started my journey as a web engineer by identifying problems I was passionate about solving. With no initial resources, I focused on learning, networking, and taking small, consistent steps. Over time, these efforts grew into a thriving business, and I’m excited to share my experiences and lessons with you.',
    location: 'New York, NY',
    anonymous: true,
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