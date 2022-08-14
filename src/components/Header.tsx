import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Circle,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsFacebook, BsSearch } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoLogOut, IoNotifications } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

import { useFacebookStore } from "~/store";

export type ShowMenu = boolean;

interface Props {
  showMenuButton: ShowMenu;
  onShowSidebar: () => void;
}

export function Header({ showMenuButton, onShowSidebar }: Props) {
  const currentUser = useFacebookStore((state) => state.currentUser);
  return (
    <Box
      as="header"
      h="56px"
      bg="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      shadow="base"
      position="sticky"
      zIndex="sticky"
      top="0"
    >
      <HStack px={4} spacing={2} justify="space-between" w="full" maxW="5xl">
        <HStack spacing={2}>
          {/* brand logo */}
          <IconButton
            borderRadius="full"
            aria-label="Home"
            icon={<BsFacebook size="full" />}
          />

          {/* search */}
          {showMenuButton ? (
            <IconButton
              borderRadius="full"
              aria-label="Search"
              icon={<BsSearch />}
            />
          ) : (
            <InputGroup w="full" maxW="2xs">
              <InputLeftElement pointerEvents="none">
                <BsSearch />
              </InputLeftElement>
              <Input
                h="40px"
                variant="filled"
                placeholder="Search Facebook"
                borderRadius="full"
              />
            </InputGroup>
          )}
        </HStack>

        <ButtonGroup>
          {/* messenger */}
          <Menu>
            <MenuButton>
              <IconButton
                borderRadius="full"
                aria-label="Messenger"
                icon={<FaFacebookMessenger size="20px" />}
              />
            </MenuButton>
            <MenuList>
              <Text fontSize="sm" textAlign="center" px="4" py="3">
                There are no message
              </Text>
            </MenuList>
          </Menu>

          {/* notifications */}
          <Menu>
            <MenuButton>
              <IconButton
                borderRadius="full"
                aria-label="Notifications"
                icon={<IoNotifications size="20px" />}
              />
            </MenuButton>
            <MenuList>
              <Text fontSize="sm" textAlign="center" px="4" py="3">
                There are no notifications
              </Text>
            </MenuList>
          </Menu>

          {/* account */}
          <Menu>
            <MenuButton>
              <Avatar
                boxSize="40px"
                name={currentUser?.name}
                src={currentUser?.avatar}
              />
            </MenuButton>

            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem gap={2}>
                  <Avatar
                    boxSize="40px"
                    name={currentUser?.name}
                    src={currentUser?.avatar}
                  />
                  <Text fontWeight="medium">{currentUser?.name}</Text>
                </MenuItem>
              </MenuGroup>

              <MenuDivider />
              {/* logout button */}
              <MenuItem gap={2}>
                <Circle size="36px" bg="blackAlpha.200">
                  <IoLogOut size="20px" />
                </Circle>
                <Text fontWeight="medium">Logout</Text>
              </MenuItem>
            </MenuList>
          </Menu>

          {/* sidebar menu button */}
          {showMenuButton && (
            <Button onClick={onShowSidebar} borderRadius="lg" aria-label="Menu">
              <GiHamburgerMenu size="20px" />
            </Button>
          )}
        </ButtonGroup>
      </HStack>
    </Box>
  );
}
