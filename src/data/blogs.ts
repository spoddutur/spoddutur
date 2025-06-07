export interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Understanding GPT-4: A Deep Dive",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2024-03-15",
    author: "John Doe",
    tags: ["GPT-4", "LLMs", "AI"]
  },
  {
    id: "2",
    title: "The Future of AI Writing",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2024-03-14",
    author: "Jane Smith",
    tags: ["Applications", "Future", "AI"]
  },
  {
    id: "3",
    title: "Ethical Considerations in AI",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "2024-03-13",
    author: "Mike Johnson",
    tags: ["Ethics", "AI", "Responsibility"]
  },
  {
    id: "4",
    title: "Prompt Engineering Best Practices",
    content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "2024-03-12",
    author: "Sarah Wilson",
    tags: ["Prompt Engineering", "Best Practices", "LLMs"]
  },
  {
    id: "5",
    title: "LLMs in Enterprise Applications",
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    date: "2024-03-11",
    author: "David Brown",
    tags: ["LLMs", "Applications", "Enterprise"]
  }
]; 