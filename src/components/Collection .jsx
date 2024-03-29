import React from "react";
const collections = [
  {
    name: "Women's",
    href: "/products/women",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-collection-01.jpg",
    imageAlt: "Woman wearing a comfortable cotton t-shirt.",
  },
  {
    name: "Men's",
    href: "/products/men",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-collection-02.jpg",
    imageAlt: "Man wearing a comfortable and casual cotton t-shirt.",
  },
  {
    name: "Electronics",
    href: "/products/electronic",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-collection-03.jpg",
    imageAlt:
      "Person sitting at a wooden desk with paper note organizer, pencil and tablet.",
  },
];
const Collection = () => {
  return (
    <div className="-mt-96 sm:mt-0">
      <h2 className="sr-only">Collections</h2>
      <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
        {collections.map((collection) => (
          <div
            key={collection.name}
            className="group relative h-96 rounded-lg bg-white shadow-xl "
          >
            <div>
              <div
                aria-hidden="true"
                className="absolute inset-0 overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                  <img
                    src={collection.imageSrc}
                    alt={collection.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
              </div>
              <div className="absolute inset-0 flex items-end rounded-lg p-6">
                <div>
                  <p aria-hidden="true" className="text-sm text-white">
                    Shop the collection
                  </p>
                  <h3 className="mt-1 font-semibold text-white">
                    <a href={collection.href}>
                      <span className="absolute inset-0" />
                      {collection.name}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
