"use client";

import { useState, useEffect } from "react";
import { farmService } from "@/service/farmService";
import {
  ChickenProduct,
  EggProduct,
  MedicalProduct,
  AuctionCardItem,
} from "@/type/farmType";

export function useStorefront() {
  const [cartCount, setCartCount] = useState<number>(1);
  const [chickenList, setChickenList] = useState<ChickenProduct[]>([]);
  const [eggList, setEggList] = useState<EggProduct[]>([]);
  const [medicalList, setMedicalList] = useState<MedicalProduct[]>([]);
  const [auctionList, setAuctionList] = useState<AuctionCardItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        const [chickens, eggs, medicals, auctions] = await Promise.all([
          farmService.getChickenList(),
          farmService.getEggList(),
          farmService.getMedicalList(),
          farmService.getAuctionList(),
        ]);
        setChickenList(chickens);
        setEggList(eggs);
        setMedicalList(medicals);
        setAuctionList(auctions);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return {
    cartCount,
    chickenList,
    eggList,
    medicalList,
    auctionList,
    isLoading,
    addToCart,
  };
}
