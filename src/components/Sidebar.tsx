import React, { useContext } from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
  Button,
  VStack,
  Flex,
  Text,
} from '@chakra-ui/react';
import SidebarContent from './SidebarContent';
import { AuthContext } from './AccountContext';

function Sidebar({
  isOpen,
  onClose,
  btnRef,
}: {
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.RefObject<HTMLButtonElement>;
}) {
  const { user } = useContext(AuthContext);

  return (
    <Drawer
      isOpen={isOpen}
      colorScheme="blackAlpha"
      size="lg"
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <SidebarContent />
        </DrawerBody>

        <DrawerFooter alignItems="center">
          <Flex m="auto" flexDir="column" width="60%" gap="0.5rem">
            {user && (
              <Text textAlign="center">
                *You aren't currently logged in. Log in to save your cart and
                checkout!
              </Text>
            )}
            <Button
              fontSize="1.5rem"
              padding="1.5rem"
              width="100%"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              fontSize="1.5rem"
              padding="1.5rem"
              colorScheme="green"
              width="100%"
            >
              Login
            </Button>
          </Flex>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default Sidebar;
