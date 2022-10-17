export const endpoint = {
  //Authentication
  auth_prefix: '/public/auth',
  auth_login: 'login',
  auth_signUp: 'signUp',

  //Media
  media_prefix: 'resources/media',
  media_upload: 'upload',
  media_get_file: 'getResource/:file',

  //Users
  users_prefix: 'resources/users',
  users_get_all_user: 'getAllUsers',
  users_get_user_by_ID: 'getUserByID',
  users_add_new_user: 'addNewUser',
  users_update_user: 'updateUser/:ID',

  //Candidates
  candidates_prefix: "resources/candidates",
  candidates_get_all: "getAllCandidates",
  candidates_get_by_ID: "getCandidatesByID",
  candidates_add_new: "addNewCandidates",
  candidates_import: "importCandidates",
  candidates_update: "updateCandidates",

  //Vote
  vote_prefix: "resources/vote",
  vote_get_all_vote_for_candidate: "getAllVoteForCandidate",
  vote_get_recently_vote: "getRecentlyVotes",
  vote_get_vote_list: "getVoteList",
  vote_vote: "vote",
  vote_update_vote: "updateVote"


}