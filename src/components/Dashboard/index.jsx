import React, { useContext } from "react";
import {
  Box,
  CloseButton,
  Flex,
  Icon,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import {
  BiLogOut,
  BiBuilding,
  BiHash,
  BiEnvelope,
  BiPhone,
  BiMenu,
} from "react-icons/bi";
import { AppContext } from "../../AppContext/AppContext";

const userProperties = ["name", "id", "email", "phone"];

function getIconForProperty(index) {
  const icons = [BiBuilding, BiHash, BiEnvelope, BiPhone];
  return icons[index] || null;
}

export default function DashboardLayout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box className="w-full h-full">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box
        w={{ md: "calc(100% - 20rem)", base: "100%" }}
        className="md:ml-[20rem] h-full overflow-scroll w-full px-10"
      >
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const { logout, user } = useContext(AppContext);
  const LinkItems = userProperties.map((property, index) => ({
    name: user[property],
    icon: getIconForProperty(index),
  }));
  return (
    <Box
      className="bg-black md:mt-20 md:rounded-r-[4rem] text-white fixed md:w-[20rem] w-full py-10 h-full"
      {...rest}
    >
      <Flex
        h="20"
        display={{ base: "flex", md: "none" }}
        alignItems="center"
        mx="8"
        justifyContent="space-between"
      >
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <div>
        <div>
          {LinkItems.map((link) => (
            <NavItem key={link.name} icon={link.icon}>
              {link.name}
            </NavItem>
          ))}
        </div>
        <div className="mt-8">
          <NavItem onClick={logout} hvr={true} icon={BiLogOut}>
            Logout
          </NavItem>
        </div>
      </div>
    </Box>
  );
};

const NavItem = ({ icon, children, hvr, ...rest }) => {
  return (
    <Box
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      className="font-helvetica font-bold uppercase"
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: hvr ? "gray.800" : "",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      className=" text-white text-3xl"
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      justifyContent="flex-start"
      {...rest}
    >
      <BiMenu
        className="cursor-pointer"
        onClick={onOpen}
        aria-label="open menu"
      />
    </Flex>
  );
};
