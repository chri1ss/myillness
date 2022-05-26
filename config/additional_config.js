module.exports = {
 help_embed: {
  grid: true, // Use grid for fields in help command embed
  display_news: true, // Display news in help command embed
  news: "> **😭 For More Bots or infos DM the bot",
  news_title: "\u200b",
  show_owner_commands: false, // Show commands for owner(s) [only when commmand was used by owner]
  show_commands_list: true, // Show commands list in help embed
 },
 intents: {
  all: true,
  issues: false,
 },
 ignored_events: ["guildCreate", "guildDelete", "guildMemberAdd", "guildMemberRemove", "interactionCreate", "messageCreate"], // Ignore this events in dashboard settings
};
