import React from "react";
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

const LinkItems = [
  { name: "IIT Madras", icon: BiBuilding },
  { name: "CLG12345", icon: BiHash },
  { name: "college@email.com", icon: BiEnvelope },
  { name: "+91 12345 67890", icon: BiPhone },
];

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
      <Box w={{ md: "calc(100% - 15rem)", base: "100%" }} className="md:ml-60 h-full overflow-scroll w-full px-10">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box className="bg-black md:mt-20 md:rounded-r-[4rem] text-white fixed md:w-60 w-full py-20 h-full" {...rest}>
      <Flex h="20" display={{ base: "flex", md: "none" }} alignItems="center" mx="8" justifyContent="space-between">
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
        <div>
          <NavItem icon={BiLogOut}>Logout</NavItem>
        </div>
      </div>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
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
