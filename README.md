<div align="center">

# 🌸 BranchOut

**Your GitHub contributions, reimagined as a living pixel-art garden.**

BranchOut transforms your coding activity into a personalized virtual ecosystem — every contribution helps your garden grow.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![GitHub API](https://img.shields.io/badge/GitHub_API-181717?style=for-the-badge&logo=github&logoColor=white)

</div>

---

## 🌱 What is BranchOut?

Most developer dashboards ask you to interpret numbers. BranchOut lets you **watch your journey bloom**.

Enter your GitHub username and BranchOut generates a unique pixel-art garden seeded by your last 365 days of contributions. The more you code, the more your garden grows — from a modest garden to a flourishing landscape of rare flowers.

---

## ✨ Features

- **Personalized Gardens** — Every garden is procedurally generated from your real GitHub contribution data. No two gardens look alike.
- **Rank Progression** — Climb through six gardening titles based on your contribution count:

  | Rank | Title |
  |------|-------|
  | 🌱 | Seedling |
  | 🪴 | Gardener |
  | 🌸 | Flower Keeper |
  | 🌹 | Rose Cultivator |
  | 🌻 | Master Gardener |
  | 👑 | Garden Lord |

- **Contribution-Driven Flora** — Flowers unlock as you grow. Tulips appear early, roses reward consistency, sunflowers mark major milestones, and rare golden flowers are reserved for the most prolific contributors.
- **Pixel-Art Aesthetic** — Custom assets, pixel typography, and layered wooden UI components inspired by cozy farming and life-simulation games.
- **Accurate Activity Window** — Contributions are counted over the trailing 365 days, matching the stats shown on your GitHub profile.

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/branchout.git
cd branchout

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser, enter a GitHub username, and watch your garden grow.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React + Vite |
| Routing | React Router |
| Data | GitHub REST API, GitHub Contributions API |
| Rendering | Rendering | Dynamic pixel-art asset generation |
| Styling | Custom pixel-art design system |

---

## 🎮 How It Works

1. **Enter your GitHub username** on the landing page.
2. BranchOut fetches profile information through the GitHub REST API and **contribution history** through the GitHub Contributions API.
3. Your trailing 365-day contribution total is calculated and mapped to a **rank and level**.
4. A garden is **procedurally generated** — flower types, counts, and positions are determined by your contribution milestones, randomized within predefined boundaries for a natural look.
5. The result is a **unique pixel-art garden** that reflects your recent development activity.

---

## 🌼 Garden Flora Guide

| Flower | Unlock Condition |
|--------|-----------------|
| 🌷 Tulip | Early contributions — getting started |
| 🌹 Rose | Consistent activity over time |
| 💐 Decorative Flower | Mid-tier milestones |
| 🌻 Sunflower | Major contribution landmarks |
| ✨ Golden Flower | Prestige reward for top contributors |

---

## 🤝 Contributing

Contributions are welcome! If you'd like to add new flora, fix a bug, or improve the garden generation algorithm:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

<div align="center">

Made with 🌸 by developers, for developers.

*Stop counting commits. Start growing gardens.*

</div>
