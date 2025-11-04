# 🚀 AstroBot Discord

A Discord bot packed with 20 amazing commands and features for fun, moderation, and productivity!

## 📋 About

AstroBot is a feature-rich Discord bot built with Node.js and discord.js. It combines entertainment, moderation tools, and productivity features to enhance your Discord server experience.

## ✨ Features

### 20 Amazing Commands

#### 🎮 Fun Commands
1. **!meme** - Fetches a random meme to brighten your day
2. **!joke** - Tells a random joke from various categories
3. **!8ball [question]** - Ask the magic 8-ball a question
4. **!roll [sides]** - Roll a dice with specified number of sides (default: 6)
5. **!coinflip** - Flip a coin (heads or tails)

#### 🛡️ Moderation Commands
6. **!kick [@user] [reason]** - Kick a user from the server
7. **!ban [@user] [reason]** - Ban a user from the server
8. **!mute [@user] [duration]** - Temporarily mute a user
9. **!unmute [@user]** - Unmute a previously muted user
10. **!clear [amount]** - Clear specified number of messages (max 100)
11. **!warn [@user] [reason]** - Issue a warning to a user

#### 📊 Productivity Commands
12. **!poll [question] [option1] [option2]...** - Create a poll with reaction voting
13. **!reminder [time] [message]** - Set a reminder for yourself
14. **!todo add [task]** - Add a task to your to-do list
15. **!todo list** - View your to-do list
16. **!todo remove [id]** - Remove a task from your list

#### ℹ️ Utility Commands
17. **!help** - Display all available commands
18. **!serverinfo** - Show server statistics and information
19. **!userinfo [@user]** - Display information about a user
20. **!ping** - Check the bot's latency and response time

## 🛠️ Setup Instructions

### Prerequisites
- Node.js v16.9.0 or higher
- npm (Node Package Manager)
- A Discord Bot Token ([Create one here](https://discord.com/developers/applications))

### Installation

1. Clone this repository:
```bash
git clone https://github.com/daneyyhh/astrobot-discord.git
cd astrobot-discord
```

2. Install dependencies:
```bash
npm install discord.js
npm install dotenv
```

3. Create a `.env` file in the root directory:
```env
DISCORD_TOKEN=your_bot_token_here
CLIENT_ID=your_client_id_here
GUILD_ID=your_guild_id_here
```

4. Configure your bot settings in `config/config.json`:
```json
{
  "prefix": "!",
  "embedColor": "#5865F2",
  "moderatorRole": "Moderator",
  "muteRole": "Muted"
}
```

5. Start the bot:
```bash
node index.js
```

## 📁 Project Structure

```
astrobot-discord/
├── commands/          # Command files
│   ├── fun/
│   ├── moderation/
│   ├── productivity/
│   └── utility/
├── config/            # Bot configuration files
│   └── config.json
├── assets/            # Media files (memes, gifs, icons)
│   ├── memes/
│   ├── gifs/
│   └── icons/
├── index.js           # Main bot file
├── .env               # Environment variables (not tracked)
└── README.md          # This file
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### How to Contribute

1. **Fork the repository**
   - Click the 'Fork' button at the top right of this page

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/astrobot-discord.git
   cd astrobot-discord
   ```

3. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**
   - Write clean, commented code
   - Follow the existing code style
   - Test your changes thoroughly

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: description of your changes"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Go to the original repository
   - Click 'New Pull Request'
   - Select your fork and branch
   - Describe your changes in detail

### Contribution Guidelines

- **Code Quality**: Ensure your code is clean, well-commented, and follows JavaScript best practices
- **Testing**: Test all new features and bug fixes before submitting
- **Documentation**: Update the README.md if you add new features or commands
- **Commit Messages**: Use clear, descriptive commit messages
- **Issue First**: For major changes, open an issue first to discuss what you'd like to change

### Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what's best for the community
- Show empathy towards other contributors

## 📝 Planned Features

- Music playback commands
- Economy system with virtual currency
- Custom welcome messages
- Leveling and XP system
- Integration with external APIs

## 🐛 Bug Reports

If you find a bug, please open an issue with:
- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## 💬 Support

Need help? Have questions?
- Open an issue on GitHub
- Check the [documentation](https://discord.js.org/)
- Join our Discord server (coming soon!)

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

**Note**: This bot is currently in development. Some features may be incomplete or subject to change.
