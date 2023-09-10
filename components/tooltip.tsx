import "@/app/border.css";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export function DefaultSidebar() {
  return (
    <List className="w-60 fixed hidden md:block border h-full">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Profile
        </Typography>
      </div>
      <List>
        <Link href={"/"}>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            About me
          </ListItem>
        </Link>
        <Link href={"/project"}>
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Projects
          </ListItem>
        </Link>
      </List>
    </List>
  );
}
