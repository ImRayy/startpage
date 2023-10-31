import React from "react";
import Button from "../Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "../../../Types/TabInterface";

interface LinksProps {
  categoryName: string;
  links: Link[];
}
const Links = ({ categoryName, links }: LinksProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="uppercase border-zinc-700 text-sm font-bold  text-crust">
        {categoryName}
      </h3>
      <div className="flex gap-3 flex-wrap mb-2 ">
        {links !== undefined &&
          links.map((link, index) => (
            <Button href={link.url} key={index}>
              <Icon icon={link.icon} color={link.color} fontSize={24} />
              {link.name}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Links;
