"use client";

import React, { useState, useCallback } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Image from "@tiptap/extension-image";

const TipTapEditor = () => {
  const [title, setTitle] = useState(""); // Title of the recipe
  const [timeFun, setTimeFun] = useState<number | null>(null); // Time input (e.g., cooking time)
  const [checkedTags, setCheckedTags] = useState<Record<string, boolean>>({
    vegetarian: false,
    "gluten-free": false,
  });
  const [checkedOptions, setCheckedOptions] = useState<Record<string, boolean>>(
    {}
  );
  const [editorContent, setEditorContent] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);

  const editor = useEditor({
    extensions: [StarterKit, Bold, Italic, Image],
    content: "",
    onUpdate: ({ editor }) => {
      setEditorContent(editor.getHTML());
    },
  });

  const handleButtonClick = () => {
    const imageUrls = editorContent
      .match(/<img[^>]+src="([^">]+)"/g)
      ?.map((imgTag) => {
        const match = imgTag.match(/src="([^">]+)"/);
        return match ? match[1] : null;
      })
      .filter(Boolean);

    if (imageUrls) {
      imageUrls.forEach((url) => console.log("Image URL:", url));
    } else {
      console.log("No images found.");
    }

    if (description) {
      console.log("Description:", description);
    }

    const checkedIngredients = ingredients.filter(
      (ingredient) => checkedOptions[ingredient]
    );
    if (checkedIngredients.length > 0) {
      console.log("Checked Ingredients:", checkedIngredients.join(", "));
    } else {
      console.log("No ingredients checked.");
    }

    // Log title, timeFun, and checked tags
    console.log("Title:", title);
    console.log("Cooking Time:", timeFun ? `${timeFun} minutes` : "Not set");
    const selectedTags = Object.keys(checkedTags).filter(
      (tag) => checkedTags[tag]
    );
    console.log(
      "Selected Tags:",
      selectedTags.length > 0 ? selectedTags.join(", ") : "No tags selected"
    );
  };

  const setBold = useCallback(() => {
    if (editor) {
      editor.chain().focus().toggleBold().run();
    }
  }, [editor]);

  const setItalic = useCallback(() => {
    if (editor) {
      editor.chain().focus().toggleItalic().run();
    }
  }, [editor]);

  const addImage = useCallback(() => {
    const url = window.prompt("Enter image URL");

    if (url) {
      editor.chain().focus().setImage({ src: url, width: 300 }).run();
    }
  }, [editor]);

  const addIngredient = () => {
    const ingredient = window.prompt("Enter an ingredient");
    if (ingredient) {
      setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
      setCheckedOptions((prev) => ({
        ...prev,
        [ingredient]: false,
      }));
    }
  };

  const handleCheckboxChange = (ingredient: string) => {
    setCheckedOptions((prev) => ({
      ...prev,
      [ingredient]: !prev[ingredient],
    }));
  };

  const handleTagChange = (tag: string) => {
    setCheckedTags((prev) => ({
      ...prev,
      [tag]: !prev[tag],
    }));
  };

  if (!editor) {
    return null;
  }

  return (
    <div>
      {/* Toolbar */}
      <div className="mb-4 flex space-x-2">
        <button
          onClick={setBold}
          className={`px-4 py-2 border rounded ${
            editor.isActive("bold")
              ? "bg-blue-500 text-white"
              : "bg-white border-gray-300 text-black"
          }`}
        >
          Bold
        </button>
        <button
          onClick={setItalic}
          className={`px-4 py-2 border rounded ${
            editor.isActive("italic")
              ? "bg-blue-500 text-white"
              : "bg-white border-gray-300 text-black"
          }`}
        >
          Italic
        </button>
        <button
          onClick={addImage}
          className="px-4 py-2 bg-white border border-gray-300 rounded text-black hover:bg-gray-100"
        >
          Add Image
        </button>
      </div>

      {/* Title input */}
      <div className="mt-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter recipe title..."
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Cooking time (timeFun) */}
      <div className="mt-4">
        <input
          type="number"
          value={timeFun ?? ""}
          onChange={(e) => setTimeFun(parseInt(e.target.value))}
          placeholder="Cooking time (in minutes)..."
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Tags checkboxes */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Tags:</h3>
        <div className="flex space-x-4">
          {["vegetarian", "gluten-free"].map((tag) => (
            <label key={tag} className="flex items-center">
              <input
                type="checkbox"
                checked={checkedTags[tag]}
                onChange={() => handleTagChange(tag)}
                className="mr-2"
              />
              {tag}
            </label>
          ))}
        </div>
      </div>

      {/* TipTap Editor */}
      <EditorContent
        editor={editor}
        className="border p-4 rounded-lg min-h-[300px] focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Description input */}
      <div className="mt-4">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description..."
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Button to add ingredients */}
      <div className="mt-4">
        <button
          onClick={addIngredient}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Ingredient
        </button>
      </div>

      {/* Submit button */}
      <div className="mt-6">
        <button
          onClick={handleButtonClick}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Submit & Show Data in Console
        </button>
      </div>

      {/* Display selected data */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Ingredients:</h3>
        {ingredients.length > 0 ? (
          <ul className="list-disc pl-5">
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                {/* Checkbox next to each ingredient */}
                <input
                  type="checkbox"
                  checked={checkedOptions[ingredient]} // Whether the ingredient is checked
                  onChange={() => handleCheckboxChange(ingredient)} // Toggle checkbox state
                  className="mr-2"
                />
                {ingredient}
              </li>
            ))}
          </ul>
        ) : (
          <p>No ingredients added yet.</p>
        )}
      </div>
    </div>
  );
};

export default TipTapEditor;
