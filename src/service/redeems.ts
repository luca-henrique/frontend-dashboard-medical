import { useMutation } from "@tanstack/react-query";
import api from "./api";
import { IRedeemerData } from "../app/providers/redeem/redeem.interface";

export const getRedeem = async (id: string) => {
  const response = await api.get(`/api/v1/redeem_pages/${id}`);
  return response.data;
};

const postRedeemerData = async (data: IRedeemerData) => {
  const { id, ...payload } = data;

  const response = await api.post(`/api/v1/redeem_pages/${id}/redeem`, payload);
  return response.data;
};

export const useRedeemerMutation = () => {
  return useMutation({
    mutationFn: postRedeemerData,
  });
};
