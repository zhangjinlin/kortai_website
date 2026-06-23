import rawData from "../../test22.json";

export interface CoverData {
  image: string;
  videoHD: string;
}

// 从 test22.json 提取每个模板的封面和 HD 视频
const data: CoverData[] = (rawData as any).list.map((item: any) => ({
  image: item.image,
  videoHD: item.videoHD,
}));

/**
 * 根据脚标获取封面和视频数据
 * @param index 数组脚标（从 0 开始）
 * @returns 封面和视频数据，越界时返回第一个
 */
export function getCoverData(index: number): CoverData {
  if (index < 0 || index >= data.length) {
    return data[0];
  }
  return data[index];
}

/** 从 coverNumber 参数解析脚标，如 "Invitation_1" → 0 */
export function parseCoverNumber(coverNumber: string | null): number {
  if (!coverNumber) return 0;
  const match = coverNumber.match(/^Invitation_(\d+)$/);
  if (!match) return 0;
  return parseInt(match[1], 10) - 1;
}

export default data;
