import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg fill="#000000" width="55" height="55" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
        <svg fill="#1280e1" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#1280e1" stroke-width="0.00032"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>network</title> <path d="M27 21.75c-0.795 0.004-1.538 0.229-2.169 0.616l0.018-0.010-2.694-2.449c0.724-1.105 1.154-2.459 1.154-3.913 0-1.572-0.503-3.027-1.358-4.212l0.015 0.021 3.062-3.062c0.57 0.316 1.249 0.503 1.971 0.508h0.002c2.347 0 4.25-1.903 4.25-4.25s-1.903-4.25-4.25-4.25c-2.347 0-4.25 1.903-4.25 4.25v0c0.005 0.724 0.193 1.403 0.519 1.995l-0.011-0.022-3.062 3.062c-1.147-0.84-2.587-1.344-4.144-1.344-0.868 0-1.699 0.157-2.467 0.443l0.049-0.016-0.644-1.17c0.726-0.757 1.173-1.787 1.173-2.921 0-2.332-1.891-4.223-4.223-4.223s-4.223 1.891-4.223 4.223c0 2.332 1.891 4.223 4.223 4.223 0.306 0 0.605-0.033 0.893-0.095l-0.028 0.005 0.642 1.166c-1.685 1.315-2.758 3.345-2.758 5.627 0 0.605 0.076 1.193 0.218 1.754l-0.011-0.049-0.667 0.283c-0.78-0.904-1.927-1.474-3.207-1.474-2.334 0-4.226 1.892-4.226 4.226s1.892 4.226 4.226 4.226c2.334 0 4.226-1.892 4.226-4.226 0-0.008-0-0.017-0-0.025v0.001c-0.008-0.159-0.023-0.307-0.046-0.451l0.003 0.024 0.667-0.283c1.303 2.026 3.547 3.349 6.1 3.349 1.703 0 3.268-0.589 4.503-1.574l-0.015 0.011 2.702 2.455c-0.258 0.526-0.41 1.144-0.414 1.797v0.001c0 2.347 1.903 4.25 4.25 4.25s4.25-1.903 4.25-4.25c0-2.347-1.903-4.25-4.25-4.25v0zM8.19 5c0-0.966 0.784-1.75 1.75-1.75s1.75 0.784 1.75 1.75c0 0.966-0.784 1.75-1.75 1.75v0c-0.966-0.001-1.749-0.784-1.75-1.75v-0zM5 22.42c-0.966-0.001-1.748-0.783-1.748-1.749s0.783-1.749 1.749-1.749c0.966 0 1.748 0.782 1.749 1.748v0c-0.001 0.966-0.784 1.749-1.75 1.75h-0zM27 3.25c0.966 0 1.75 0.784 1.75 1.75s-0.784 1.75-1.75 1.75c-0.966 0-1.75-0.784-1.75-1.75v0c0.001-0.966 0.784-1.749 1.75-1.75h0zM11.19 16c0-0.001 0-0.002 0-0.003 0-2.655 2.152-4.807 4.807-4.807 1.328 0 2.53 0.539 3.4 1.409l0.001 0.001 0.001 0.001c0.87 0.87 1.407 2.072 1.407 3.399 0 2.656-2.153 4.808-4.808 4.808s-4.808-2.153-4.808-4.808c0-0 0-0 0-0v0zM27 27.75c-0.966 0-1.75-0.784-1.75-1.75s0.784-1.75 1.75-1.75c0.966 0 1.75 0.784 1.75 1.75v0c-0.001 0.966-0.784 1.749-1.75 1.75h-0z"></path> </g></svg>
      </svg>
    ),
    title: "Graph View",
    paragraph:
      "Link urls based on categories or relevance or any criteria you choose then view them all in a clean & modern graph view.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
        <svg fill="#1280e1" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>puzzle</title> <path d="M23.994 18.252h-2.711c-0.014-0.001-0.025-0.008-0.039-0.008-0.414 0-0.75 0.336-0.75 0.75v0c0 0.002 0 0.004 0 0.006 0 1.104-0.895 2-2 2s-2-0.895-2-2c0-0.002 0-0.004 0-0.007v0c-0-0.414-0.336-0.75-0.75-0.75v0c-0.014 0-0.025 0.007-0.039 0.008h-1.957v-1.33c1.584-0.354 2.75-1.748 2.75-3.415s-1.166-3.060-2.727-3.41l-0.023-0.004v-2.095c-0-0.414-0.336-0.75-0.75-0.75h-10.999c-0.414 0-0.75 0.336-0.75 0.75v0 10.976l-0.005 0.024v11c0 0.414 0.336 0.75 0.75 0.75l21.999 0.004c0.414-0 0.75-0.336 0.75-0.75v0-11c-0-0.414-0.336-0.75-0.75-0.75v0zM2.75 8.748h9.499v2.010c0 0.414 0.336 0.75 0.75 0.75v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0c-0.414 0-0.75 0.336-0.75 0.75v0 1.99h-1.331c-0.351-1.588-1.746-2.758-3.415-2.758s-3.064 1.17-3.411 2.734l-0.004 0.023h-1.338zM2.745 19.748h1.957c0.017 0.001 0.031 0.010 0.048 0.010 0.416-0.006 0.751-0.343 0.754-0.759v-0c0.003-1.101 0.896-1.993 1.998-1.993 1.103 0 1.998 0.894 1.998 1.998 0 0.002 0 0.003 0 0.005v-0c0 0.414 0.336 0.75 0.75 0.75v0c0.017 0 0.031-0.009 0.048-0.010h1.948v1.332c-1.584 0.355-2.75 1.75-2.75 3.416 0 1.442 0.873 2.681 2.12 3.215l0.023 0.009c0.171 0.074 0.374 0.139 0.584 0.186l0.023 0.004v1.338h-9.5zM23.244 29.252h-9.499v-1.96c0.001-0.015 0.009-0.028 0.009-0.043-0.006-0.416-0.343-0.751-0.758-0.754h-0c-1.102-0.003-1.994-0.896-1.994-1.998 0-1.104 0.895-1.998 1.998-1.998 0.002 0 0.003 0 0.005 0h-0c0.414-0 0.75-0.336 0.75-0.75v0c0-0.015-0.008-0.028-0.009-0.043v-1.953h1.338c0.357 1.58 1.749 2.742 3.412 2.742s3.055-1.162 3.407-2.719l0.004-0.023h1.338zM29.994 1.25h-10.998c-0.414 0-0.75 0.336-0.75 0.75v0 2.702c-0.001 0.017-0.010 0.031-0.010 0.048 0 0.414 0.336 0.75 0.75 0.75v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0c-0.414 0-0.75 0.336-0.75 0.75v0c0 0.017 0.009 0.031 0.010 0.048v2.702c0 0.414 0.336 0.75 0.75 0.75h2.076c0.354 1.584 1.748 2.75 3.415 2.75s3.060-1.166 3.41-2.727l0.004-0.023h2.093c0.414-0 0.75-0.336 0.75-0.75v0-11c-0-0.414-0.336-0.75-0.75-0.75h-0zM29.244 12.25h-2.008c-0.414 0-0.75 0.336-0.75 0.75v0c0 1.105-0.895 2-2 2s-2-0.895-2-2v0c-0-0.414-0.336-0.75-0.75-0.75h-1.99v-1.338c1.579-0.358 2.74-1.749 2.74-3.412s-1.161-3.054-2.717-3.407l-0.023-0.004v-1.338h9.498z"></path> </g></svg>
      </svg>
    ),
    title: "Integrations",
    paragraph:
      "Integrate LNK with many popular platforms and tools and take your urls to the next level.",
  },
  {
    id: 3,
    icon: (
      <svg fill="#000000" width="55" height="55" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
        <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M84 128.6H54.6C36.6 128.6 22 114 22 96c0-9 3.7-17.2 9.6-23.1 5.9-5.9 14.1-9.6 23.1-9.6H84m24 65.3h29.4c9 0 17.2-3.7 23.1-9.6 5.9-5.9 9.6-14.1 9.6-23.1 0-18-14.6-32.6-32.6-32.6H108M67.9 96h56.2" style={{ fill: "none", stroke: "#1280e1", strokeWidth: 12, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10 }}></path></g></svg>
      </svg>
    ),
    title: "URL shortening",
    paragraph:
      "You don't need to put up with long urls anymore. You can shorten urls to just a few characters or even give them unique names.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <svg viewBox="0 0 24 24" id="team" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="_24x24_user--dark" data-name="24x24/user--dark"> <rect id="Rectangle" width="24" height="24" fill="none"></rect> </g> <path id="Combined_Shape" data-name="Combined Shape" d="M0,12.106C0,8.323,4.5,9.08,4.5,7.567a2.237,2.237,0,0,0-.41-1.513A3.5,3.5,0,0,1,3,3.4,3.222,3.222,0,0,1,6,0,3.222,3.222,0,0,1,9,3.4,3.44,3.44,0,0,1,7.895,6.053,2.333,2.333,0,0,0,7.5,7.567c0,1.513,4.5.757,4.5,4.54,0,0-1.195.894-6,.894S0,12.106,0,12.106Z" transform="translate(6 8)" fill="none" stroke="#1280e1" stroke-miterlimit="10" stroke-width="1.5"></path> <path id="Combined_Shape-2" data-name="Combined Shape" d="M4.486,12.967c-.569-.026-1.071-.065-1.512-.114A6.835,6.835,0,0,1,0,12.106C0,8.323,4.5,9.08,4.5,7.567a2.237,2.237,0,0,0-.41-1.513A3.5,3.5,0,0,1,3,3.4,3.222,3.222,0,0,1,6,0,3.222,3.222,0,0,1,9,3.4" transform="translate(1 3)" fill="none" stroke="#1280e1" stroke-miterlimit="10" stroke-width="1.5"></path> <path id="Combined_Shape-3" data-name="Combined Shape" d="M-4.486,12.967c.569-.026,1.071-.065,1.512-.114A6.835,6.835,0,0,0,0,12.106C0,8.323-4.5,9.08-4.5,7.567a2.237,2.237,0,0,1,.41-1.513A3.5,3.5,0,0,0-3,3.4,3.222,3.222,0,0,0-6,0,3.222,3.222,0,0,0-9,3.4" transform="translate(23 3)" fill="none" stroke="#1280e1" stroke-miterlimit="10" stroke-width="1.5"></path> </g></svg>
      </svg>
    ),
    title: "Team Space",
    paragraph:
      "You never have to send another link to someone ever again. Invite your team and manage their access level to your workspace.",
  },
];
export default featuresData;