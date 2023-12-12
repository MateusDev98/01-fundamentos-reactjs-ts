interface Author {
  name: string;
  avatarUrl: string;
  role: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}
