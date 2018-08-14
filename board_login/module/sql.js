const async = require('async');

const pool = require('../config/dbPool.js');
const db = require('./pool.js');

module.exports = {
  getAllBoardItem : async (...args) => {
    let getBoardListQuery = 'SELECT * FROM board_login.board ORDER BY board_idx DESC';
    let getBoardList = await db.queryParamCnt_None(getBoardListQuery);

    return getBoardList;
  },
  registerBoardItem : async (...args) => {
    let user_idx = args[0];
    let board_title = args[1];
    let board_content = args[2];
    let board_photo = args[3];
    let board_writetime = args[4];
    
    let registerBoardQuery = 'INSERT INTO board_login.board (user_idx, board_title, board_content, board_photo, board_writetime) VALUES (?, ?, ?, ?, ?)';
    let registerBoard = await db.queryParamCnt_Arr(registerBoardQuery, [user_idx, board_title, board_content, board_photo, board_writetime]);

    return registerBoard;
  },
  deleteBoardItem : async (...args) => {
    let board_idx = args[0];
    let user_idx = args[1];

    let deleteBoardItemQuery = 'DELETE FROM board_login.board WHERE board_idx = ? AND user_idx = ?';
    let deleteBoardItem = await db.queryParamCnt_Arr(deleteBoardItemQuery, [board_idx, user_idx]);

    if (!deleteBoardItem) {
      return false;
    } else {
      return deleteBoardItem;
    }
  },
  getAllCommentItem : async (...args) => {
    let board_idx = args[0];

    let getCommentListQuery = 'SELECT * FROM board_login.comment WHERE board_idx = ? ORDER BY comment_idx DESC';
    let getCommentList = await db.queryParamCnt_Arr(getCommentListQuery, [board_idx]);

    let updateBoardItemViewsQuery = 'UPDATE board_login.board SET board_views = board_views + 1 WHERE board_idx = ?';
    let updateBoardItemViews = await db.queryParamCnt_Arr(updateBoardItemViewsQuery, [board_idx]);

    if (!getCommentList || !updateBoardItemViews) {
      return false;
    } else {
      return getCommentList;
    }
  },
  registerCommentItem : async (...args) => {
    let user_idx = args[0];
    let board_idx = args[1];
    let comment_content = args[2];
    let comment_writetime = args[3];

    let registerCommentQuery = 'INSERT INTO board_login.comment (user_idx, board_idx, comment_content, comment_writetime) VALUES (?, ?, ?, ?)';
    let registerComment = await db.queryParamCnt_Arr(registerCommentQuery, [user_idx, board_idx, comment_content, comment_writetime]);

    return registerComment;
  },
  deleteCommentItem : async (...args) => {
    let comment_idx = args[0];
    let user_idx = args[1];

    let deleteCommentItemQuery = 'DELETE FROM board_login.comment WHERE comment_idx = ? AND user_idx = ?';
    let deleteCommentItem = await db.queryParamCnt_Arr(deleteCommentItemQuery, [comment_idx, user_idx]);

    if (!deleteCommentItem) {
      return false;
    } else {
      return deleteCommentItem;
    }
  }
};