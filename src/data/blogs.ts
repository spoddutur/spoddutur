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
    content: "Lorem ipsum dolor sit amet...",
    date: "2024-03-15",
    author: "John Doe",
    tags: ["GPT-4", "LLMs"]
  },
  {
    id: "2",
    title: "The Future of AI Writing",
    content: "Lorem ipsum dolor sit amet...",
    date: "2024-03-14",
    author: "Jane Smith",
    tags: ["Applications", "Future"]
  },
  {
    id: "3",
    title: "Ethical Considerations in AI",
    content: "Lorem ipsum dolor sit amet...",
    date: "2024-03-13",
    author: "Mike Johnson",
    tags: ["Ethics", "AI"]
  },
  {
    id: "4",
    title: "Prompt Engineering Best Practices",
    content: "Lorem ipsum dolor sit amet...",
    date: "2024-03-12",
    author: "Sarah Wilson",
    tags: ["Prompt Engineering", "Best Practices"]
  },
  {
    id: "5",
    title: "LLMs in Enterprise Applications",
    content: "Lorem ipsum dolor sit amet...",
    date: "2024-03-11",
    author: "David Brown",
    tags: ["LLMs", "Applications"]
  }
]; 