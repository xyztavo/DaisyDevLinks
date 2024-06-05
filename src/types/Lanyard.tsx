export type Lanyard = {
    data: LanyardData;
  };
export type LanyardData = {
    discord_user: LanyardDiscordUser;
    discord_status: string;
  };
type LanyardDiscordUser = {
    id: string;
    username: string;
    global_name: string;
    display_name: string;
  };
  