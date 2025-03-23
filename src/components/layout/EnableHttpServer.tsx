import React from "react";
import { Switch } from "@/components/ui/switch";
import FlexContainer from "../box/FlexContainer";
import { invoke } from "@tauri-apps/api/core";

const EnableHttpServer = () => {
  const [serverRunning, setServerRunning] = React.useState(false);

  const checkServerStatus = async () => {
    const isRunning = (await invoke("is_server_running")) as boolean;
    setServerRunning(isRunning);
  };
  React.useEffect(() => {
    checkServerStatus();
  }, []);

  const handleChangeServerStatus = () => {
    const newStatus = !serverRunning;
    try {
      invoke("start_server");
      console.log("✅ Serveur Actix-web démarré !");
      setServerRunning(true);
    } catch (error) {
      console.error("❌ Erreur serveur :", error);
    }
  };

  return (
    <FlexContainer
      justifyContent="end"
      className="gap-3 w-full"
      alignItems="center"
    >
      <div className="flex flex-row gap-3 items-center">
        <span className="text-sm font-semibold">Serveur HTTP:</span>
        <Switch
          checked={serverRunning}
          onCheckedChange={handleChangeServerStatus}
          className="shadow shadow-white/50 data-[state=checked]:!bg-green-500"
        />
      </div>
    </FlexContainer>
  );
};

export default EnableHttpServer;
