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
      <h3 className="uppercase mb-2 border-zinc-700 text-sm font-bold  text-crust">
        {categoryName}
      </h3>
      <div className="flex sm:justify-start gap-3 flex-wrap mb-2">
        {links !== undefined &&
          links.map((link, index) => (
            <span
              key={index}
              style={
                enableAnimations
                  ? {
                      animation: `button-slide-in-right ${
                        index === 0 ? 0.4 : index / 10 + 0.4
                      }s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
                    }
                  : {}
              }
            >
              <Button href={link.url}>
                <Icon icon={link.icon} color={link.color} fontSize={24} />
                <span className="hidden sm:block">{link.name}</span>
              </Button>
            </span>
          ))}
      </div>
    </div>
  );
};

export default Links;
