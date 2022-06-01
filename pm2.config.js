module.exports = {
 apps: [
  {
   name: "MyILLness - Bot",
   script: "./index.js",
   watch: true,
   node_args: "--trace-deprecation",
   exec_mode: "cluster",
   ignore_watch: ["[/\\]./", "node_modules", "database", "cache", "^.", "^[.]", ".git"],
   watch_options: {
    followSymlinks: false,
   },
   args: ["--color", "--bot"],
  },
  {
   name: "myiLLness - Dashboard",
   script: "./index.js",
   watch: true,
   node_args: "--trace-deprecation",
   exec_mode: "cluster",
   ignore_watch: ["[/\\]./", "node_modules", "database", "cache", "^.", "^[.]", ".git"],
   watch_options: {
    followSymlinks: false,
   },
   args: ["--color", "--dashboard"],
  },
  {
   name: "myiLLness.exe - API",
   script: "./index.js",
   watch: true,
   node_args: "--trace-deprecation",
   exec_mode: "cluster",
   ignore_watch: ["[/\\]./", "node_modules", "database", "cache", "^.", "^[.]", ".git"],
   watch_options: {
    followSymlinks: false,
   },
   args: ["--color", "--api"],
  },
 ],
};
