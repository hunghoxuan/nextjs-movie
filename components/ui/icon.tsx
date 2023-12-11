"use client";

import * as React from "react";
import {
  PiHouse,
  PiHouseFill,
  PiFilmStrip,
  PiFilmStripFill,
  PiTelevision,
  PiTelevisionFill,
  PiMagnifyingGlass,
  PiMagnifyingGlassFill,
} from "react-icons/pi";

import { IconProps, IconEnum } from "@/lib/types/web.d";

function Icon({ icon, active }: IconProps): JSX.Element {
  if (icon === IconEnum.HOME) {
    return !active ? (
      <PiHouse className="w-6 h-6" />
    ) : (
      <PiHouseFill className="w-6 h-6 text-blue-500" />
    );
  } else if (icon === IconEnum.MOVIES) {
    return !active ? (
      <PiFilmStrip className="w-6 h-6" />
    ) : (
      <PiFilmStripFill className="w-6 h-6 text-blue-500" />
    );
  } else if (icon === IconEnum.TV_SHOWS) {
    return !active ? (
      <PiTelevision className="w-6 h-6" />
    ) : (
      <PiTelevisionFill className="w-6 h-6 text-blue-500" />
    );
  } else if (icon === IconEnum.SEARCH) {
    return !active ? (
      <PiMagnifyingGlass className="w-6 h-6" />
    ) : (
      <PiMagnifyingGlassFill className="w-6 h-6 text-blue-500" />
    );
  }
  return <></>;
}
Icon.displayName = "Icon";

export { Icon };
