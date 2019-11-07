const zh = {
  // Global
  formatCanonicalUrl: () => `https://vote4.hk`,
  formatSiteName: () => '2019區議會選舉｜Vote4.hk 投票指南',
  formatTitle: (prefix) => `${prefix ? prefix + '｜' : '' }2019區議會選舉｜Vote4.hk 投票指南`,
  formatDescription: (prefix) => `${prefix ? prefix + '｜' : '' }2019區議會選舉指南，全港最強選區、候選人名單搜尋器，提供提名、歷屆區議會選舉結果、數據分析、候選人言論及會議出席率。`,
  formatKeyword: (prefix) => `${prefix ? prefix + ', ' : '' }vote4hk, vote4, 投票指南, 區議會選舉, 區議會, 區選, 選舉, 2019 dc, district council election, 掌心雷, 候選人, 選區, 分界, 地圖, 選情, 數據, 分析, 蘋果, hk01, 立場, scmp, 建制派, 民主派`,
  formatImageUrl: () => 'https://vote4.hk/og-image.png',
  formatArticleSection: () => '候選人資料｜選區分界地圖｜選情數據分析',

  // District
  formatDistrictTitle: (
    districtName,
    areaName) => `${districtName}候選人名單｜${areaName}｜2019區議會選舉｜Vote4.hk 投票指南`,
  formatDistrictDescription: (
    districtName, areaName,
    constituenciesNames) => `${areaName}${districtName}包括${constituenciesNames}等，包含所有候選人名單及詳盡分析，歷屆區議會選舉結果、數據分析、候選人言論及會議出席率。`,
  formatDistrictCanonicalUrl: (year, code) => `https://vote4.hk/district/${year}/${code}`,

  // Constituency
  formatConstituencyTitle: (
    constituencyName, constituencyCode, districtName,
    areaName) => `${districtName}－${constituencyName}（${constituencyCode}）候選人名單｜${areaName}｜2019區議會選舉｜Vote4.hk 投票指南`,
  formatConstituencyDescription: (
    constituencyName, constituencyCode,
    mainAreasNames) => `${constituencyName}（${constituencyCode}）選區候選人名單及介紹，候選人言論、媒體報導、會議出席率、參選紀錄一覽無遺。中環選區主要屋苑有${mainAreasNames}。`,
  formatConstituencyCanonicalUrl: (year, code) => `https://vote4.hk/district/${year}/${code}`,

  // Candidate
  formatCandidateTitle: (
    candidateName, constituencyName, constituencyCode,
    districtName) => `${candidateName}｜${districtName}－${constituencyName}（${constituencyCode}）｜2019區議會選舉｜Vote4.hk 投票指南`,
  formatCandidateDescription: (
    candidateName, constituencyName, constituencyCode, districtName, areaName,
    candidateNumber,
    mainAreasNames) => `${candidateName}，2019區議會選舉${districtName}－${constituencyName}（${constituencyCode}）${candidateNumber}號候選人詳盡介紹，${constituencyName}選區包括${mainAreasNames}。`,
  formatCandidateImageUrl: (id) => `https://vote4.hk/static/images/avatar/${id}.jpg`,
  formatCandidateCanonicalUrl: (name, id) => `https://vote4.hk/profile/${name}/${id}`,
}

module.exports = zh
