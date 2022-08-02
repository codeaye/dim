import { Button, useToast } from "@chakra-ui/react";
import { invoke } from "@tauri-apps/api";
interface GenerateButtonProps {
  capitals: boolean;
  smalls: boolean;
  numbers: boolean;
  symbols: boolean;
  length: number;
}

const limit = 500000;

const GenerateButton = ({
  capitals,
  smalls,
  numbers,
  symbols,
  length,
}: GenerateButtonProps) => {
  const toast = useToast();

  return (
    <Button
      colorScheme="teal"
      size="sm"
      width="100%"
      onClick={async () => {
        let sets = [];
        capitals && sets.push(0);
        smalls && sets.push(1);
        numbers && sets.push(2);
        symbols && sets.push(3);

        if (length > limit) {
          toast({
            title: "Too long!",
            description: "The password length is too long!",
            status: "error",
            duration: 1000,
            isClosable: true,
            position: "top-right",
          });
        } else {
          navigator.clipboard.writeText(
            await invoke("gen_password", { sets, passLength: length })
          );
          toast({
            title: "Copied to clipboard!",
            status: "success",
            duration: 1000,
            isClosable: true,
            position: "top-right",
          });
        }
      }}
    >
      Generate Password
    </Button>
  );
};

export default GenerateButton;
