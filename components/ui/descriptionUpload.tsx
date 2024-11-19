import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

type DescriptionUploadProps = {
  onAddProduct: (description: string) => void;
};

const DescriptionUpload: React.FC<DescriptionUploadProps> = ({ onAddProduct }) => {
  const [description, setDescription] = useState<string>("");

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleAddProduct = () => {
    if (description) {
      onAddProduct(description);
      setDescription(""); // Reset the input field
    }
  };

  return (
    <div className="p-6 justify-center">
       <div className="relative">
        <Textarea
          id="description"
          placeholder="Décrivez votre article ici..."
          value={description}
          onChange={handleDescriptionChange}
          className="border rounded-md p-2 text-left w-full min-h-[240px] pr-[100px]"
        />
        
      </div>
    </div>
  );
};

export default DescriptionUpload;
