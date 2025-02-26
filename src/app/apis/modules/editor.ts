import request from "../axios"
import { EditorParams } from "../interfaces/editor"

class Editor {
  /**
   * 获取文本列表
   * @returns 
   */
  editorList() {
    return request({
      url: `editor`,
      method: "GET"
    })
  }
  /**
   * 获取笔记详情
   * @param id 
   */
  editorDetail(id: number) {
    return request({
      url: `editor/${id}`,
      method: "GET"
    })
  }
  /**
   * 新增笔记
   * @param data 
   * @returns 
   */
  creditorEditor(data: EditorParams) {
    return request({
      url: `editor`,
      method: "POST",
      data
    })
  }
  /**
   * 修改笔记
   * @param data 
   * @returns 
   */
  putEditor(data: EditorParams) {
    return request({
      url: `editor`,
      method: "PUT",
      data
    })
  }
}

export default new Editor()