import React from "react";
import { DocSearch } from "@docsearch/react";
import { Input } from "@material-tailwind/react";

export function AlgoliaSearch() {
  return (
    <div className="group relative">
      <Input
        type="email"
        placeholder="Search"
        className="focus:!border-t-gray-900 group-hover:border-2 group-hover:!border-gray-900"
        labelProps={{
          className: "hidden",
        }}
      />
      <div className="absolute top-[calc(50%-1px)] right-2.5 -translate-y-2/4">
        <kbd className="rounded border border-blue-gray-100 bg-white px-1 pt-px pb-0 text-xs font-medium text-gray-900 shadow shadow-black/5">
          <span className="mr-0.5 inline-block translate-y-[1.5px] text-base">
            ⌘
          </span>
          K
        </kbd>
      </div>
    </div>
  );
}
