import React from "react";
import Button from "../Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "../../../Types/TabInterface";

interface LinksProps {
  categoryName: string;
  links: Link[];
  enableAnimations: boolean;
}
const Links = ({ categoryName, links, enableAnimations }: LinksProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="uppercase border-zinc-700 text-sm font-bold  text-crust">
        {categoryName}
      </h3>
      <div className="flex gap-3 flex-wrap mb-2 ">
        {links !== undefined &&
          links.map((link, index) => (
            <span
              key={index}
              style={
                enableAnimations
                  ? {
                      animation: `button-slide-in-right ${
                        index === 0 ? 0.6 : index / 10 + 0.6
                      }s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
                    }
                  : {}
              }
            >
              <Button href={link.url}>
                <Icon icon={link.icon} color={link.color} fontSize={24} />
                {link.name}
              </Button>
            </span>
          ))}
      </div>
    </div>
  );
};

export default Links;
