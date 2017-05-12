/**
 * 更新标题
 * @param commit
 * @param title 标题
 */
export const updateTitle = ({commit}, title) => {
  document.title = title
  commit('UPDATE_TITLE', title)
}
/**
 * 更新文章列表
 * @param commit
 * @param list 列表
 */
export const addArticleList = ({commit}, list) => {
  commit('ADD_ARTICLE_LIST', list)
}
/**
 * 更新经验列表
 * @param commit
 * @param list 列表
 */
export const addExperienceList = ({commit}, list) => {
  commit('ADD_EXPERIENCE_LIST', list)
}

/**
 * 更新随想列表
 * @param commit
 * @param list 列表
 */
export const addThinkList = ({commit}, list) => {
  commit('ADD_THINK_LIST', list)
}

