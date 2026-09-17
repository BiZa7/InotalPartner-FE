
import { useState, useRef } from "react";
import {
  ArrowLeft,
  Bold,
  CalendarDays,
  Check,
  ChevronDown,
  Clock,
  Eye,
  FileText,
  Hash,
  ImagePlus,
  Italic,
  Link,
  List,
  MapPin,
  Newspaper,
  Pen,
  Plus,
  Send,
  Tag,
  Trash2,
  Underline,
  Upload,
  X,
} from "lucide-react";

export default function CreatePost() {
  const [postType, setPostType] = useState("Event");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
const [selectedCategories, setSelectedCategories] = useState([
  "Community",
]);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const [featuredImage, setFeaturedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [location, setLocation] = useState("");

  const [status, setStatus] = useState("Draft");
  const [showPreview, setShowPreview] = useState(false);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const fileInputRef = useRef(null);

  const [categories, setCategories] = useState([
  "Community",
  "Education",
  "Technology",
  "Announcement",
  "Sports",
  "Entertainment",
  "Other",
]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    // Limit image size to 5MB
    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be smaller than 5MB.");
      return;
    }

    setImageFile(file);
    setFeaturedImage(URL.createObjectURL(file));
  };

  const removeImage = () => {
    if (featuredImage) {
      URL.revokeObjectURL(featuredImage);
    }

    setFeaturedImage(null);
    setImageFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // -----------------------------
  // CATEGORY SELECTION
  // -----------------------------

  const toggleCategory = (categoryName) => {
  setSelectedCategories((prev) =>
    prev.includes(categoryName)
      ? prev.filter((item) => item !== categoryName)
      : [...prev, categoryName]
  );
};

const addCategory = () => {
  const formattedCategory = newCategoryName.trim();

  if (!formattedCategory) return;

  // Cek apakah category sudah ada
  if (
    categories.some(
      (category) =>
        category.toLowerCase() === formattedCategory.toLowerCase()
    )
  ) {
    return;
  }

  // Tambahkan category baru
  setCategories((prev) => [...prev, formattedCategory]);

  // Otomatis centang category baru
  setSelectedCategories((prev) => [
    ...prev,
    formattedCategory,
  ]);

  // Reset form
  setNewCategoryName("");
  setShowAddCategory(false);
};

  // -----------------------------
  // HASHTAGS
  // -----------------------------
  const addTag = () => {
    let newTag = tagInput.trim();

    // Remove # if user types it
    newTag = newTag.replace(/^#+/, "");

    if (!newTag) return;

    // Avoid duplicate tags
    if (tags.includes(newTag)) {
      setTagInput("");
      return;
    }

    setTags([...tags, newTag]);
    setTagInput("");
  };

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // -----------------------------
  // FORM ACTIONS
  // -----------------------------
  const handleSaveDraft = () => {
    setStatus("Draft");

    console.log("Draft saved:", {
      title,
      content,
      postType,
      selectedCategories,
      tags,
      imageFile,
      eventDate,
      eventTime,
      location,
    });

    alert("Draft saved! Connect this action to your backend.");
  };

  const handlePublish = () => {
    if (!title.trim()) {
      alert("Please enter a post title.");
      return;
    }

    if (!content.trim()) {
      alert("Please write some content.");
      return;
    }

    setStatus("Published");

    console.log("Post published:", {
      title,
      content,
      postType,
      selectedCategories,
      tags,
      imageFile,
      eventDate,
      eventTime,
      location,
    });

    alert("Post published! Connect this action to your backend.");
  };

  // -----------------------------
  // TEXT EDITOR
  // -----------------------------
  const insertFormatting = (format) => {
    const textarea = document.getElementById("post-content");

    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);

    let formattedText = selectedText;

    if (format === "bold") {
      formattedText = `**${selectedText || "bold text"}**`;
    }

    if (format === "italic") {
      formattedText = `*${selectedText || "italic text"}*`;
    }

    if (format === "underline") {
      formattedText = `<u>${selectedText || "underlined text"}</u>`;
    }

    if (format === "list") {
      formattedText = `- ${selectedText || "List item"}`;
    }

    if (format === "link") {
      formattedText = `[${selectedText || "Link text"}](url)`;
    }

    const newContent =
      content.substring(0, start) +
      formattedText +
      content.substring(end);

    setContent(newContent);

    setTimeout(() => {
      textarea.focus();
    }, 0);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* =================================
          TOP NAVIGATION
      ================================= */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            {/*<button
              onClick={() => window.history.back()}
              className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <ArrowLeft size={20} />
            </button>

            <div className="hidden h-8 w-px bg-slate-200 sm:block" />*/}

            <div>
              <h1 className="text-lg font-bold tracking-tight">
                Create Post
              </h1>
            
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="hidden items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:flex"
            >
              <Eye size={17} />
              {showPreview ? "Edit Post" : "Preview"}
            </button>

            <button
              onClick={handleSaveDraft}
              className="hidden rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:block"
            >
              Save Draft
            </button>

            <button
              onClick={handlePublish}
              className="flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
            >
              <Send size={16} />
              Publish
            </button>
          </div>
        </div>
      </header>

      {/* =================================
          MOBILE PREVIEW BUTTON
      ================================= */}
      <div className="border-b border-slate-200 bg-white px-4 py-3 sm:hidden">
        <button
          onClick={() => setShowPreview(!showPreview)}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-sm font-medium text-slate-700"
        >
          <Eye size={17} />
          {showPreview ? "Edit Post" : "Preview Post"}
        </button>
      </div>

      {/* =================================
          MAIN CONTENT
      ================================= */}
      <main className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {showPreview ? (
          <PreviewPost
            title={title}
            content={content}
            category={selectedCategories.join(", ")}
            postType={postType}
            tags={tags}
            featuredImage={featuredImage}
            eventDate={eventDate}
            eventTime={eventTime}
            location={location}
          />
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
            {/* =================================
                LEFT: MAIN EDITOR
            ================================= */}
            <div className="min-w-0 space-y-6">
              {/* POST TYPE */}
              <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-bold">Post Details</h2>
                  </div>

                  <FileText size={22} className="text-slate-400" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setPostType("Event")}
                    className={`flex items-center gap-3 rounded-xl border p-4 text-left transition ${
                      postType === "Event"
                        ? "border-sky-500 bg-sky-50 text-sky-700  ring-sky-500"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <CalendarDays size={21} />
                    <div>
                      <p className="text-sm font-semibold">Event</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setPostType("News")}
                    className={`flex items-center gap-3 rounded-xl border p-4 text-left transition ${
                      postType === "News"
                        ? "border-sky-500 bg-sky-50 text-sky-700 ring-sky-500"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <Newspaper size={21} />
                    <div>
                      <p className="text-sm font-semibold">News</p>
                    </div>
                  </button>
                </div>
              </section>

              {/* TITLE AND CONTENT */}
              <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-5">
                  <h2 className="text-base font-bold">Content Editor</h2>
                </div>

                {/* TITLE */}
                <div className="mb-6">
                  <label
                    htmlFor="post-title"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Post Title
                  </label>

                  <input
                    id="post-title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter your post title..."
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-lg font-semibold outline-none transition placeholder:font-normal placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                {/* EDITOR */}
                <div>
                  <label
                    htmlFor="post-content"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Post Content
                  </label>

                  <div className="overflow-hidden rounded-lg border border-slate-200 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100">
                    {/* TOOLBAR */}
                    <div className="flex flex-wrap items-center gap-1 border-b border-slate-200 bg-slate-50 p-2">
                      <EditorButton
                        icon={<Bold size={17} />}
                        label="Bold"
                        onClick={() => insertFormatting("bold")}
                      />

                      <EditorButton
                        icon={<Italic size={17} />}
                        label="Italic"
                        onClick={() => insertFormatting("italic")}
                      />

                      <EditorButton
                        icon={<Underline size={17} />}
                        label="Underline"
                        onClick={() => insertFormatting("underline")}
                      />

                      <div className="mx-1 h-5 w-px bg-slate-200" />

                      <EditorButton
                        icon={<List size={17} />}
                        label="List"
                        onClick={() => insertFormatting("list")}
                      />

                      <EditorButton
                        icon={<Link size={17} />}
                        label="Link"
                        onClick={() => insertFormatting("link")}
                      />
                    </div>

                    <textarea
                      id="post-content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Start writing your post here..."
                      rows={12}
                      className="block w-full resize-y border-0 px-4 py-4 text-sm leading-7 text-slate-700 outline-none focus:ring-0"
                    />

                    <div className="flex items-center justify-between border-t border-slate-100 px-4 py-2 text-xs text-slate-400">
                      <span>Write your story...</span>
                      <span>{content.length} characters</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* FEATURED IMAGE */}
              <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-bold">Featured Image</h2>
                  </div>

                  <ImagePlus size={22} className="text-slate-400" />
                </div>

                {featuredImage ? (
                  <div className="relative overflow-hidden rounded-xl border border-slate-200">
                    <img
                      src={featuredImage}
                      alt="Featured post"
                      className="max-h-[360px] w-full object-cover"
                    />

                    <button
                      onClick={removeImage}
                      className="absolute right-3 top-3 rounded-lg bg-white p-2 text-red-500 shadow-md transition hover:bg-red-50"
                    >
                      <Trash2 size={18} />
                    </button>

                    <div className="bg-white px-4 py-3">
                      <p className="truncate text-sm font-medium text-slate-700">
                        {imageFile?.name}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        Featured image selected
                      </p>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex min-h-[220px] w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center transition hover:border-sky-400 hover:bg-sky-50/40"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-sky-500 shadow-sm">
                      <Upload size={24} />
                    </div>

                    <p className="text-sm font-semibold text-slate-700">
                      Click to upload an image
                    </p>

                    <p className="mt-2 text-xs text-slate-400">
                      PNG, JPG or WEBP • Maximum 5MB
                    </p>
                  </button>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </section>

              {/* MOBILE SAVE DRAFT */}
              <button
                onClick={handleSaveDraft}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 sm:hidden"
              >
                <FileText size={17} />
                Save Draft
              </button>
            </div>

            {/* =================================
                RIGHT: POST SETTINGS
            ================================= */}
            <aside className="min-w-0 space-y-6">
              {/* PUBLISH STATUS */}
              <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <Pen size={19} className="text-slate-500" />
                  <h2 className="font-bold">Post Status</h2>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-3">
                  <span className="text-sm text-slate-500">Status</span>
                  <span
                    className="text-xs font-semibold "
                  >
                    {status}
                  </span>
                </div>

                <button
                  onClick={handleSaveDraft}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  <FileText size={17} />
                  Save as Draft
                </button>

                <button
                  onClick={handlePublish}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-sky-500 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-600"
                >
                  <Send size={17} />
                  Publish Post
                </button>
              </section>

              {/* CATEGORY */}
              <section className="border border-slate-200 bg-white">

                {/* CATEGORY HEADER */}
                <div className="flex items-center justify-between px-5 py-4">
                    <div className="flex items-center gap-2">
                    <Tag size={19} className="text-slate-500" />

                    <h2 className="font-bold">
                        Categories
                    </h2>
                    </div>

                    <ChevronDown
                    size={19}
                    className="text-slate-900"
                    />
                </div>

                {/* CATEGORY LIST */}
                <div className="px-5 py-4">

                    <div className="space-y-3">

                    {categories.map((item) => (
                        <label
                        key={item}
                        className="flex cursor-pointer items-center gap-3"
                        >
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(item)}
                            onChange={() => toggleCategory(item)}
                            className="h-5 w-5 cursor-pointer rounded-sm border-slate-300 text-blue-600 accent-blue-600"
                        />

                        <span className="text-sm text-slate-800">
                            {item}
                        </span>
                        </label>
                    ))}

                    </div>

                    {/* ADD CATEGORY BUTTON */}
                    <button
                    type="button"
                    onClick={() => setShowAddCategory(!showAddCategory)}
                    className="mt-6 rounded-md border border-blue-500 px-3 py-1.5 text-sm text-blue-600 transition hover:bg-blue-50"
                    >
                    Add Category
                    </button>

                    {/* ADD CATEGORY FORM */}
                    {showAddCategory && (
                    <div className="mt-5 border-t border-slate-200 pt-5">

                        {/* NEW CATEGORY NAME */}
                        <div>
                        <label
                            htmlFor="new-category-name"
                            className="mb-2 block text-xs font-bold uppercase text-slate-900"
                        >
                            New Category Name
                        </label>

                        <input
                            id="new-category-name"
                            type="text"
                            value={newCategoryName}
                            onChange={(e) => setNewCategoryName(e.target.value)}
                            placeholder=""
                            className="w-full rounded-none border border-slate-400 px-3 py-3 text-sm text-slate-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                addCategory();
                            }
                            }}
                        />
                        </div>

                        {/* ADD CATEGORY SUBMIT */}
                        <button
                        type="button"
                        onClick={addCategory}
                        disabled={!newCategoryName.trim()}
                        className="mt-5 border border-blue-500 px-4 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                        Add Category
                        </button>

                    </div>
                    )}

                </div>

                </section>

              {/* HASHTAGS */}
              <section className="border border-slate-200 bg-white">
                    {/* TAGS HEADER */}
                    <div className="flex items-center gap-2 bg-white px-5 py-5">
                        <Hash size={19} className="text-slate-500" />
                        <h2 className="font-bold">
                        Tags
                        </h2>
                    </div>

                    {/* TAG INPUT */}
                    <div className="px-5 pb-5">
                        <label
                        htmlFor="tag-input"
                        className="mb-3 block text-xs font-medium uppercase text-slate-900"
                        >
                        Add Tag
                        </label>

                        <textarea
                        id="tag-input"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyDown={handleTagKeyDown}
                        placeholder=""
                        rows={1}
                        className="block w-full resize-none rounded-none border border-blue-500 bg-white px-3 py-3 text-sm text-slate-700 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                        />

                        {/* TAGS */}
                        {tags.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                            {tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700"
                            >
                                #{tag}

                                <button
                                type="button"
                                onClick={() => removeTag(tag)}
                                className="rounded-full hover:bg-blue-100"
                                aria-label={`Remove hashtag ${tag}`}
                                >
                                <X size={13} />
                                </button>
                            </span>
                            ))}
                        </div>
                        )}
                    </div>
                </section>

              {/* EVENT DETAILS */}
              {postType === "Event" && (
                <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-4 flex items-center gap-2">
                    <CalendarDays size={19} className="text-slate-500" />
                    <h2 className="font-bold">Event Details</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="event-date"
                        className="mb-2 block text-sm font-medium text-slate-600"
                      >
                        Event Date
                      </label>

                      <div className="relative">
                        <CalendarDays
                          size={17}
                          className="pointer-events-none absolute left-3 top-3.5 text-slate-400"
                        />

                        <input
                          id="event-date"
                          type="date"
                          value={eventDate}
                          onChange={(e) => setEventDate(e.target.value)}
                          className="w-full rounded-lg border border-slate-200 py-3 pl-10 pr-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="event-time"
                        className="mb-2 block text-sm font-medium text-slate-600"
                      >
                        Event Time
                      </label>

                      <div className="relative">
                        <Clock
                          size={17}
                          className="pointer-events-none absolute left-3 top-3.5 text-slate-400"
                        />

                        <input
                          id="event-time"
                          type="time"
                          value={eventTime}
                          onChange={(e) => setEventTime(e.target.value)}
                          className="w-full rounded-lg border border-slate-200 py-3 pl-10 pr-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="event-location"
                        className="mb-2 block text-sm font-medium text-slate-600"
                      >
                        Location
                      </label>

                      <div className="relative">
                        <MapPin
                          size={17}
                          className="pointer-events-none absolute left-3 top-3.5 text-slate-400"
                        />

                        <input
                          id="event-location"
                          type="text"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder="Event location"
                          className="w-full rounded-lg border border-slate-200 py-3 pl-10 pr-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        />
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}

// =================================
// EDITOR BUTTON COMPONENT
// =================================
function EditorButton({ icon, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={label}
      className="rounded-md p-2 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
    >
      {icon}
    </button>
  );
}

// =================================
// PREVIEW COMPONENT
// =================================
function PreviewPost({
  title,
  content,
  category,
  postType,
  tags,
  featuredImage,
  eventDate,
  eventTime,
  location,
}) {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-indigo-600">
            Landing Page Preview
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight">
            {title || "Your Post Title"}
          </h2>
        </div>

        <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
          {postType}
        </span>
      </div>

      <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {featuredImage ? (
          <img
            src={featuredImage}
            alt={title || "Featured image"}
            className="max-h-[420px] w-full object-cover"
          />
        ) : (
          <div className="flex h-48 items-center justify-center bg-slate-100 text-slate-400">
            <ImagePlus size={40} />
          </div>
        )}

        <div className="p-6 sm:p-10">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
              {category}
            </span>

            {postType === "Event" && eventDate && (
              <span className="text-xs text-slate-500">
                {eventDate}
              </span>
            )}
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {title || "Your Post Title"}
          </h1>

          {postType === "Event" && (
            <div className="mt-5 grid gap-3 rounded-xl bg-slate-50 p-4 text-sm text-slate-600 sm:grid-cols-2">
              {eventDate && (
                <div className="flex items-center gap-2">
                  <CalendarDays size={17} />
                  {eventDate}
                </div>
              )}

              {eventTime && (
                <div className="flex items-center gap-2">
                  <Clock size={17} />
                  {eventTime}
                </div>
              )}

              {location && (
                <div className="flex items-center gap-2 sm:col-span-2">
                  <MapPin size={17} />
                  {location}
                </div>
              )}
            </div>
          )}

          <div className="mt-8 whitespace-pre-wrap text-base leading-8 text-slate-600">
            {content || "Your post content will appear here..."}
          </div>

          {tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2 border-t border-slate-100 pt-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </div>
  );
}