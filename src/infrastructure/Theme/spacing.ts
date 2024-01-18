interface LineHeights {
    title: string,
    para: String
};

interface Spacing {
    [index:number]: String
};

export const lineHeight: LineHeights = {
    title: "18px",
    para: "24px"
}

export const space: Spacing = ["7px", "8px", "10px", "12px", "14px", "16px", "24px", "32px", "54px", "78px"];
