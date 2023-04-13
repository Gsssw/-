/**
 * @Author: 郭树伟
 * @Date: 2023-03-08 21:04:16
 * @LastEditTime: 2023-04-13 09:18:44
 * @LastEditors: 郭树伟
 * @FilePath: /douyin-master 2/src/router/routes.js
 * @Copyright 2021 - 2023 郭树伟, All Rights Reserved. 
 * @All codes are protected by China's regulations on the protection of computer software, and infringement must be investigated.
 * @所有代码均受中国《计算机软件保护条例》保护，侵权必究.
 */
import Home from "../pages/home";
import Music from "../pages/home/Music";
import MusicRankList from "../pages/home/MusicRankList";
import Search from "../pages/home/SearchPage";
import LivePage from "../pages/home/LivePage";
import Me from "../pages/me/Me";
import EditUserInfo from "../pages/me/userinfo/EditUserInfo";
import EditUserInfoItem from "../pages/me/userinfo/EditUserInfoItem";
import countryChoose from "../pages/login/countryChoose";
import MyCard from "../pages/me/MyCard";
import MyCollect from "../pages/me/MyCollect";
import AddSchool from "../pages/me/userinfo/AddSchool";
import ChooseSchool from "../pages/me/userinfo/ChooseSchool";
import DeclareSchool from "../pages/me/userinfo/DeclareSchool";
import ChooseDepartment from "../pages/me/userinfo/ChooseDepartment";
import DisplayType from "../pages/me/userinfo/DisplayType";
import ChooseLocation from "../pages/me/userinfo/ChooseLocation";
import ChooseProvince from "../pages/me/userinfo/ChooseProvince";
import ChooseCity from "../pages/me/userinfo/ChooseCity";
import LookHistory from "../pages/me/rightMenu/LookHistory";
import MinorProtectionIndex from "../pages/me/rightMenu/MinorProtection/Index";
import MinorProtectionDetailSetting from "../pages/me/rightMenu/MinorProtection/DetailSetting";
import TriggerTime from "../pages/me/rightMenu/MinorProtection/TriggerTime";
import Setting from "../pages/me/rightMenu/Setting";
import MusicCollect from "../pages/me/collect/MusicCollect";
import VideoCollect from "../pages/me/collect/VideoCollect";
import MyMusic from "../pages/me/MyMusic";
import FindAcquaintance from "../pages/people/FindAcquaintance";
import FollowAndFans from "../pages/people/FollowAndFans";
import ServiceProtocol from "../pages/other/ServiceProtocol";
import AddressList from "../pages/people/AddressList";
import Scan from "../pages/people/Scan";
import FaceToFace from "../pages/people/FaceToFace";

const routes = [
  {path: '/', redirect: '/home'},
  {path: '/home', component: Home},
  {path: '/home/music', component: Music},
  {path: '/home/music-rank-list', component: MusicRankList},
  {path: '/home/live', component: LivePage},
  {path: '/home/search', component: Search},
{path: '/message', component: Home},
  {path: '/message/music', component: Music},
  {path: '/message/music-rank-list', component: MusicRankList},
  {path: '/message/live', component: LivePage},
  { path: '/message/search', component: Search },
  {path: '/attention', component: Home},
  {path: '/attention/music', component: Music},
  {path: '/attention/music-rank-list', component: MusicRankList},
  {path: '/attention/live', component: LivePage},
  { path: '/attention/search', component: Search },
  {path: '/publish', component: Home},
  {path: '/publish/music', component: Music},
  {path: '/publish/music-rank-list', component: MusicRankList},
  {path: '/publish/live', component: LivePage},
  {path: '/publish/search', component: Search},

  {path: '/me', component: Me,},
  {path: '/me/edit-userinfo', component: EditUserInfo},
  {path: '/me/edit-userinfo-item', component: EditUserInfoItem},
  {path: '/me/country-choose', component: countryChoose},
  {path: '/me/my-card', component: MyCard},
  {path: '/me/my-collect', component: MyCollect},
  {path: '/me/add-school', component: AddSchool},
  {path: '/me/choose-school', component: ChooseSchool},
  {path: '/me/declare-school', component: DeclareSchool},
  {path: '/me/choose-department', component: ChooseDepartment},
  {path: '/me/display-type', component: DisplayType},
  {path: '/me/choose-location', component: ChooseLocation},
  {path: '/me/choose-province', component: ChooseProvince},
  {path: '/me/choose-city', component: ChooseCity},
  {path: '/me/right-menu/look-history', component: LookHistory},
  {path: '/me/right-menu/minor-protection/index', component: MinorProtectionIndex},
  {path: '/me/right-menu/minor-protection/detail-setting', component: MinorProtectionDetailSetting},
  {path: '/me/right-menu/minor-protection/trigger-time', component: TriggerTime},
  {path: '/me/right-menu/setting', component: Setting},
  {path: '/me/collect/music-collect', component: MusicCollect},
  {path: '/me/collect/video-collect', component: VideoCollect},
  {path: '/me/my-music', component: MyMusic},
  {path: '/people/find-acquaintance', component: FindAcquaintance},
  {path: '/people/follow-and-fans', component: FollowAndFans},
  {path: '/service-protocol', component: ServiceProtocol},
  {path: '/address-list', component: AddressList},
  {path: '/scan', component: Scan},
  {path: '/face-to-face', component: FaceToFace},
]

export default routes