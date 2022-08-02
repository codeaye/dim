import {
  Box,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  VStack,
} from "@chakra-ui/react";

import { useState } from "react";
import GenerateButton from "./components/GenerateButton";

const App = () => {
  const [length, setLength] = useState(0);
  const [capitals, setCapitals] = useState(true);
  const [smalls, setSmalls] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);

  return (
    <Box bg="white" p={6} rounded="md" data-tauri-drag-region>
      <VStack spacing={4} align="flex-start">
        <FormControl>
          <FormLabel htmlFor="pass_length">Password Length</FormLabel>
          <NumberInput
            size="sm"
            id="pass_length"
            name="pass_length"
            onChange={(e) => {
              let nunified = e.replace(/\D/, "");
              setLength(nunified.length > 0 ? parseInt(nunified) : 0);
            }}
            value={length}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormHelperText>
            The length of the password you want to generate.
          </FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Charset Selection</FormLabel>
          <Grid templateColumns="repeat(2, 1fr)" gap={3}>
            <Checkbox
              defaultChecked
              checked={capitals}
              onChange={() => setCapitals(!capitals)}
            >
              Capital Letters
            </Checkbox>
            <Checkbox
              defaultChecked
              checked={smalls}
              onChange={() => setSmalls(!smalls)}
            >
              Small Letters
            </Checkbox>
            <Checkbox
              defaultChecked
              checked={numbers}
              onChange={() => setNumbers(!numbers)}
            >
              Numbers
            </Checkbox>
            <Checkbox checked={symbols} onChange={() => setSymbols(!symbols)}>
              Symbols
            </Checkbox>
          </Grid>
          <FormHelperText>
            The configuration for the charset you want to use.
          </FormHelperText>
        </FormControl>
        <GenerateButton
          capitals={capitals}
          smalls={smalls}
          numbers={numbers}
          symbols={symbols}
          length={length}
        />
      </VStack>
    </Box>
  );
};

export default App;
