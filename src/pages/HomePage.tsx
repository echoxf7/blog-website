import Blogcard from "../components/Blogcard";
interface Blog {
  imageSrc: string;
  author: string;
  date: string;
  title: string;
  content: string;
}

const HomePage: React.FC = () => {
  const blogs: Blog[] = [
    {
      imageSrc: "golang.png",
      author: "Author Name",
      date: "May 23, 2024",
      title: "Gopls is Go model",
      content: `gopls (pronounced "Go please") is the official Go language server
                developed by the Go team. It provides IDE features to any
                LSP-compatible editor. You should not need to interact with gopls
                directly--it will be automatically integrated into your editor. The
                specific features and settings vary slightly by editor, so we
                recommend that you proceed to the documentation for your editor
                below.`,
    },
    {
      imageSrc: "golang.png",
      author: "Author Name",
      date: "May 23, 2024",
      title: "Gopls is Go model",
      content: `gopls (pronounced "Go please") is the official Go language server
                developed by the Go team. It provides IDE features to any
                LSP-compatible editor. You should not need to interact with gopls
                directly--it will be automatically integrated into your editor. The
                specific features and settings vary slightly by editor, so we
                recommend that you proceed to the documentation for your editor
                below.`,
    },
    {
      imageSrc: "golang.png",
      author: "Author Name",
      date: "May 23, 2024",
      title: "Gopls is Go model",
      content: `gopls (pronounced "Go please") is the official Go language server
                developed by the Go team. It provides IDE features to any
                LSP-compatible editor. You should not need to interact with gopls
                directly--it will be automatically integrated into your editor. The
                specific features and settings vary slightly by editor, so we
                recommend that you proceed to the documentation for your editor
                below.`,
    },
    {
      imageSrc: "golang.png",
      author: "Author Name",
      date: "May 23, 2024",
      title: "Gopls is Go model",
      content: `gopls (pronounced "Go please") is the official Go language server
                developed by the Go team. It provides IDE features to any
                LSP-compatible editor. You should not need to interact with gopls
                directly--it will be automatically integrated into your editor. The
                specific features and settings vary slightly by editor, so we
                recommend that you proceed to the documentation for your editor
                below.`,
    },
    {
      imageSrc: "golang.png",
      author: "Author Name",
      date: "May 23, 2024",
      title: "Gopls is Go model",
      content: `gopls (pronounced "Go please") is the official Go language server
                developed by the Go team. It provides IDE features to any
                LSP-compatible editor. You should not need to interact with gopls
                directly--it will be automatically integrated into your editor. The
                specific features and settings vary slightly by editor, so we
                recommend that you proceed to the documentation for your editor
                below.`,
    },
    {
      imageSrc: "golang.png",
      author: "Author Name",
      date: "May 23, 2024",
      title: "Gopls is Go model",
      content: `gopls (pronounced "Go please") is the official Go language server
                developed by the Go team. It provides IDE features to any
                LSP-compatible editor. You should not need to interact with gopls
                directly--it will be automatically integrated into your editor. The
                specific features and settings vary slightly by editor, so we
                recommend that you proceed to the documentation for your editor
                below.`,
    },
    {
      imageSrc: "golang.png",
      author: "Author Name",
      date: "May 23, 2024",
      title: "Gopls is Go model",
      content: `gopls (pronounced "Go please") is the official Go language server
                developed by the Go team. It provides IDE features to any
                LSP-compatible editor. You should not need to interact with gopls
                directly--it will be automatically integrated into your editor. The
                specific features and settings vary slightly by editor, so we
                recommend that you proceed to the documentation for your editor
                below.`,
    },
  ];

  return (
    <div className="main">
      {blogs.map((blog, index) => (
        <Blogcard key={index} {...blog} />
      ))}
    </div>
  );
};

export default HomePage;
