# Portfolio Website – Jonas Quintiens

This repository contains the source code for the personal portfolio website of Jonas Quintiens, built using [Hugo](https://gohugo.io/) (a fast static site generator) and the [hugo-blog-awesome](https://github.com/janraasch/hugo-blog-awesome) theme. The site showcases projects, experience, and documents in both English and Dutch.

## Features

- **Static site** generated with Hugo for fast performance and easy deployment.
- **Multilingual support** (English & Dutch).
- **Custom layouts** and styling.
- **Project portfolio** with detailed markdown pages.
- **Static files** for CV, research, and documentation.
- **Responsive design** using the hugo-blog-awesome theme.

## Project Structure

```
.
├── jo-qu.com/                # Main Hugo site directory
│   ├── content/              # Markdown content (projects, about, internship, etc.)
│   ├── layouts/              # Custom HTML templates and partials
│   ├── static/               # Static assets (css, files, images)
│   ├── themes/               # Hugo themes (hugo-blog-awesome as submodule)
│   ├── hugo.toml             # Hugo site configuration
│   └── ...                   # Other Hugo directories/files
├── README.md                 # This file
└── .gitignore                # Git ignore rules
```

## Getting Started

### Prerequisites

- [Hugo](https://gohugo.io/getting-started/install/) (version 0.87.0 or higher recommended)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/YOUR_USERNAME/portfolio_ssg.git
   cd portfolio_ssg/jo-qu.com
   ```

2. **Initialize and update submodules (for the theme):**
   ```sh
   git submodule update --init --recursive
   ```

3. **Run the development server:**
   ```sh
   hugo server
   ```
   The site will be available at [http://localhost:1313](http://localhost:1313).

### Editing Content

- All content is in `jo-qu.com/content/` as Markdown files.
- To add a new project, create a new `.md` file in `jo-qu.com/content/other-projects/`.
- For multilingual content, use `.nl.md` for Dutch and `.md` for English.

### Customization

- **Layouts:** Modify HTML templates in `jo-qu.com/layouts/`.
- **Styling:** Edit CSS in `jo-qu.com/static/css/custom.css`.
- **Theme:** The site uses the [hugo-blog-awesome](https://github.com/janraasch/hugo-blog-awesome) theme (included as a submodule).

### Deployment

You can deploy the generated static site to any static hosting provider (e.g., Netlify, Vercel, GitHub Pages).

To build the site for production:
```sh
hugo
```
The output will be in `jo-qu.com/public/`.

## License

This project is for personal use. The [hugo-blog-awesome](https://github.com/janraasch/hugo-blog-awesome) theme is MIT licensed.

## Author

Jonas Quintiens  
[CV](jo-qu.com/static/files/CV_Jonas_Quintiens.pdf)
