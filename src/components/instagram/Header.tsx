import {
  Avatar,
  Box,
  ButtonGroup,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Show,
  Text,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { RiHomeFill, RiMessengerLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdOutlineExplore } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiOutlinePlusSquare } from "react-icons/ai";

import InstagramSvg from "!/instagram.svg";
import { useInstagramStore } from "~/store";

export const HEADER_HEIGHT = 60;
const HEADER_MAX_WIDTH = 975;

export function Header() {
  const navigate = useNavigate();
  const currentUser = useInstagramStore((state) => state.currentUser);
  return (
    <Box
      as="header"
      h={`${HEADER_HEIGHT}px`}
      w="full"
      bg="white"
      shadow="base"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="sticky"
      zIndex="sticky"
      top="0"
    >
      <HStack
        px={5}
        w="full"
        maxW={`${HEADER_MAX_WIDTH}px`}
        justifyContent="center"
        flexShrink="0"
      >
        {/* brand logo */}
        <Box flexGrow="1" flexShrink="0">
          <Image h="40px" mt="6px" src={InstagramSvg} alt="Instagram" />
        </Box>

        {/* search */}
        <Show above="md">
          <InputGroup w="full" maxW="2xs">
            <InputLeftElement
              pointerEvents="none"
              h="36px"
              w="16px"
              left="16px"
              color="gray.500"
            >
              <FiSearch size="16px" />
            </InputLeftElement>
            <Input
              placeholder="Search"
              pl="44px"
              h="36px"
              variant="filled"
              borderRadius="lg"
            />
          </InputGroup>
        </Show>

        {/* navigation */}
        <HStack h="24px" flexGrow="1" flexShrink="0" justifyContent="end">
          <ButtonGroup
            as="nav"
            h="24px"
            spacing="22px"
            variant="ghost"
            colorScheme="black"
            borderRadius="full"
          >
            <IconButton
              minW="24px"
              boxSize="24px"
              aria-label="Home"
              icon={<RiHomeFill size="24px" />}
            />
            <IconButton
              minW="24px"
              boxSize="24px"
              aria-label="Messenger"
              icon={<RiMessengerLine size="24px" />}
            />
            <IconButton
              minW="24px"
              boxSize="24px"
              aria-label="New post"
              icon={<AiOutlinePlusSquare size="24px" />}
            />
            <IconButton
              minW="24px"
              boxSize="24px"
              aria-label="Find people"
              icon={<MdOutlineExplore size="24px" />}
            />
            <IconButton
              minW="24px"
              boxSize="24px"
              aria-label="Activity feed"
              icon={<AiOutlineHeart size="24px" />}
            />

            {/* profile */}
            <Menu>
              <MenuButton>
                <Avatar
                  boxSize="24px"
                  name={currentUser?.name}
                  src={currentUser?.avatarUrl}
                />
              </MenuButton>
              <MenuList w="230px" py="1" shadow="md" borderRadius="base">
                <MenuGroup>
                  <MenuItem as="button" gap="3" px="4" py="2">
                    <CgProfile size="16px" />
                    <Text fontSize="14px" noOfLines={1}>
                      {currentUser?.name}
                    </Text>
                  </MenuItem>
                </MenuGroup>
                <MenuDivider m="0" />
                {/* logout button */}
                <MenuItem
                  onClick={() => navigate("/")}
                  as="button"
                  gap="3"
                  px="4"
                  py="2"
                >
                  <Text fontSize="14px">Logout</Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </ButtonGroup>
        </HStack>
      </HStack>
    </Box>
  );
}
