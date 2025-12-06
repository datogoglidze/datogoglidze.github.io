import type { Url } from "@/types/common.ts";

export interface Hardware {
  component: string;
  name: string;
  url: Url;
}

export const HARDWARE: Hardware[] = [
  {
    component: "CPU",
    name: "AMD Ryzen 7 7700X",
    url: {
      name: "AMD",
      address:
        "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-7-7700x.html",
    },
  },
  {
    component: "CPU Cooler",
    name: "ARCTIC Liquid Freezer II 240",
    url: {
      name: "Arctic",
      address: "https://www.arctic.de/en/Liquid-Freezer-II-240/ACFRE00046B",
    },
  },
  {
    component: "CPU Holder",
    name: "Thermalright AM5 CPU Holder",
    url: {
      name: "Thermalright",
      address: "https://www.thermalright.com/product/am5-secure-frame-black/",
    },
  },
  {
    component: "Thermal Paste",
    name: "ARCTIC MX-6",
    url: {
      name: "Arctic",
      address: "https://www.arctic.de/en/MX-6/ACTCP00080A",
    },
  },
  {
    component: "Motherboard",
    name: "MSI MAG B650 TOMAHAWK",
    url: {
      name: "MSI",
      address: "https://www.msi.com/Motherboard/MAG-B650-TOMAHAWK-WIFI",
    },
  },
  {
    component: "RAM",
    name: "Kingston FURY Beast 32 GB (2 x 16 GB)",
    url: {
      name: "Kingston",
      address:
        "https://www.kingston.com/en/memory/gaming/kingston-fury-beast-ddr5-memory",
    },
  },
  {
    component: "SSD",
    name: "MSI SPATIUM M480 PRO 1 TB M.2-2280",
    url: {
      name: "MSI",
      address: "https://www.msi.com/Storage/SPATIUM-M480-PRO-PCIe-4.0-NVMe-M.2",
    },
  },
  {
    component: "GPU",
    name: "AMD Radeon RX 6650 XT",
    url: {
      name: "Powercolor",
      address: "https://www.powercolor.com/product-detail25.htm",
    },
  },
  {
    component: "PSU",
    name: "be quiet! Pure Power 12 M 850 W",
    url: {
      name: "be quiet",
      address: "https://www.bequiet.com/en/powersupply/4072?ref=dnsmichi.at",
    },
  },
  {
    component: "Case",
    name: "Deepcool CC560 Limited ATX Mid Tower",
    url: {
      name: "Deepcool",
      address:
        "https://www.deepcool.com/products/Cases/CC560-Limited-Mid-Tower-ATX-PC-Case/2023/16834.shtml",
    },
  },
  {
    component: "Fans",
    name: "ARCTIC P14 x 6",
    url: {
      name: "Arctic",
      address: "https://www.arctic.de/en/P14/ACFAN00123A",
    },
  },
  {
    component: "Monitor",
    name: 'Acer Nitro 24" FHD 165 Hz',
    url: {
      name: "Display Specifications",
      address: "https://www.displayspecifications.com/en/model/ba6e20e7",
    },
  },
  {
    component: "Keyboard",
    name: "HyperX Alloy Core",
    url: {
      name: "HyperX",
      address:
        "https://row.hyperx.com/products/hyperx-alloy-core-rgb-gaming-keyboard",
    },
  },
  {
    component: "Mouse",
    name: "Logitech G305 LIGHTSPEED",
    url: {
      name: "Logitech",
      address:
        "https://www.logitechg.com/en-us/shop/p/g305-lightspeed-wireless-gaming-mouse",
    },
  },
];
