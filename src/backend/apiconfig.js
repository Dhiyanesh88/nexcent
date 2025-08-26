const API_BASE_URL = "http://localhost/nexcent/api";

const apiEndpoints = {
  signup: `${API_BASE_URL}/signup2.php`,
  login: `${API_BASE_URL}/login2.php`,
  getAchieve: `${API_BASE_URL}/achieve.php`,
  getCalender: `${API_BASE_URL}/calender.php`,
  getClient: `${API_BASE_URL}/client.php`,
  getCommunity: `${API_BASE_URL}/community.php`,
  getCommunityUpd: `${API_BASE_URL}/comupd.php`,
  getCustomer: `${API_BASE_URL}/customer.php`,
  getHero: `${API_BASE_URL}/hero.php`,
  getUnlock: `${API_BASE_URL}/unlock.php`,
};
export default apiEndpoints;