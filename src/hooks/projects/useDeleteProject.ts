"use client";
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from "react-hot-toast";
import { useRouter } from 'next/navigation';


const deleteProject = async (projectId: string, userEmail: string) => {
  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_BASE_URL}/projects/delete-project/${projectId}`,
    {
      data: { userEmail },
    }
  );
  return response.data;
};


const useDeleteProject = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({

    mutationFn: async ({ projectId, userEmail }: { projectId: string; userEmail: string }) => {
      return deleteProject(projectId, userEmail);
    },
    onSuccess: () => {
      toast.success("Project deleted successfully");
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      router.refresh();
    },
    onError: (error) => {
      toast.error("Failed to delete project");
      console.error(error);
    },
  });
};

export default useDeleteProject;
