import axios from "axios";
import Avatar from "./Avatar";
import useSWR from "swr";
import { FaCircle, FaDiscord, FaMoon } from "react-icons/fa";
import * as config from "../../config.json"

export function DiscordInfo({ discordUserId } : { discordUserId: string}) {
  type Lanyard = {
    data: LanyardData;
  };
  type LanyardData = {
    discord_user: LanyardDiscordUser;
    discord_status: string;
  };
  type LanyardDiscordUser = {
    id: string;
    username: string;
    global_name: string;
    display_name: string;
  };
  const baseUrl = "https://api.lanyard.rest/v1/users/";

  const {
    data: lanyard,
    isLoading,
    error,
  } = useSWR<Lanyard>("lanyard", async () => {
    const res = await axios.get(`${baseUrl}${discordUserId}`);
    return res.data;
  });

  if (isLoading || error)
    return (
      <Avatar
        imgSource={config.avatarImg}
        username={config.username}
      />
    );
  function returnStatusIcon(lanyard: LanyardData) {
    switch (lanyard.discord_status) {
      case "idle":
        return <FaMoon className="rotate-[220deg] scale-125" fill="orange" />;
      case "online":
        return <FaCircle fill="green" />;
      case "dnd":
        return <FaCircle fill="red" />;
      default:
        return <></>;
    }
  }

  return (
    lanyard && (
    <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            className="border-2 border-gray-500 rounded-full w-28"
            src="https://avatars.githubusercontent.com/u/89479041?v=4"
          />
          <div className="ml-20 mt-10 absolute">
            {returnStatusIcon(lanyard.data)}
          </div>
          <div className="flex flex-row items-center gap-2">
            <a
              href={`https://discordapp.com/users/${lanyard.data.discord_user.id}`}
              target="_blank"
            >
              <FaDiscord fill="blue" className="w-8 h-8" />
            </a>
            <h1 className="text-xl">{lanyard.data.discord_user.global_name}</h1>
          </div>
        </div>
    </div>
  ))
}