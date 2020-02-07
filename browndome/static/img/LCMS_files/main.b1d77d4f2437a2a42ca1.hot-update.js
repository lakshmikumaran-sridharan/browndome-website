webpackHotUpdate("main",{

/***/ "./src/screens/casePartner/modules/Team/AddTeam.jsx":
/*!**********************************************************!*\
  !*** ./src/screens/casePartner/modules/Team/AddTeam.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_drawer_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/drawer/style */ "./node_modules/antd/es/drawer/style/index.js");
/* harmony import */ var antd_es_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/drawer */ "./node_modules/antd/es/drawer/index.js");
/* harmony import */ var antd_es_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/form/style */ "./node_modules/antd/es/form/style/index.js");
/* harmony import */ var antd_es_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/form */ "./node_modules/antd/es/form/index.js");
/* harmony import */ var antd_es_tooltip_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/tooltip/style */ "./node_modules/antd/es/tooltip/style/index.js");
/* harmony import */ var antd_es_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/tooltip */ "./node_modules/antd/es/tooltip/index.js");
/* harmony import */ var antd_es_button_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/button/style */ "./node_modules/antd/es/button/style/index.js");
/* harmony import */ var antd_es_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd_es_notification_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/es/notification/style */ "./node_modules/antd/es/notification/style/index.js");
/* harmony import */ var antd_es_notification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/es/notification */ "./node_modules/antd/es/notification/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components_common_searchUser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/common/searchUser */ "./src/components/common/searchUser.jsx");
/* harmony import */ var components_common_searchGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/common/searchGroup */ "./src/components/common/searchGroup.jsx");
/* harmony import */ var libs_utils_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! libs/utils/helpers */ "./src/libs/utils/helpers.js");
/* harmony import */ var api_user__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! api/user */ "./src/api/user.js");










var _jsxFileName = "/Users/kallolpratimsaikia/lks-repos/segregator-lcms/frontend/src/screens/casePartner/modules/Team/AddTeam.jsx";






class AddTeamMember extends react__WEBPACK_IMPORTED_MODULE_10___default.a.Component {
  constructor(props) {
    super(props);

    this.showDrawer = () => {
      this.setState({
        visible: true
      });
    };

    this.onClose = () => {
      this.setState({
        visible: false
      });
    };

    this._submitData = () => {
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log(values);
          values.user = values.user.key;
          this.setState({
            loading: true
          });
          api_user__WEBPACK_IMPORTED_MODULE_14__["default"].addMember(values).then(response => {
            console.log(response.data);
            this.setState({
              loading: false
            });
            this.onClose();
            let params = {
              status: 'active'
            };
            this.props.getTeamMembers(params);
          }).catch(err => {
            this.setState({
              loading: false
            });

            antd_es_notification__WEBPACK_IMPORTED_MODULE_9__["default"].error({
              message: "Something went wrong"
            });
          });
        } else {
          let messages = libs_utils_helpers__WEBPACK_IMPORTED_MODULE_13__["UTIL_SCRIPTS"].formatErrors(err);

          const Message = () => messages.map((err, index) => react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
            style: {
              display: "block"
            },
            key: index,
            type: "danger",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }, err));

          antd_es_notification__WEBPACK_IMPORTED_MODULE_9__["default"].error({
            message: "Required field unfilled!",
            placement: "topLeft",
            description: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Message, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              },
              __self: this
            })
          });
        }
      });
    };

    this.state = {
      visible: false,
      loading: false
    };
  }

  render() {
    const floatingButtonStyle = {
      position: "absolute",
      bottom: 100,
      right: 50
    };
    const getFieldDecorator = this.props.form.getFieldDecorator;
    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Add Team Member",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      style: floatingButtonStyle,
      type: "primary",
      shape: "circle",
      size: "large",
      icon: "plus",
      onClick: this.showDrawer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_drawer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Add New Member",
      placement: "right",
      closable: true,
      onClose: this.onClose,
      visible: this.state.visible,
      width: "540",
      zIndex: 10,
      maskClosable: false,
      mask: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_3__["default"].Item, {
      label: "Search Users",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(components_common_searchUser__WEBPACK_IMPORTED_MODULE_11__["default"], {
      placeholder: "Search User",
      isRequired: true,
      message: "Please select user",
      fieldName: "user",
      getFieldDecorator: getFieldDecorator,
      role: "all",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_3__["default"].Item, {
      label: "Select Groups",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(components_common_searchGroup__WEBPACK_IMPORTED_MODULE_12__["default"], {
      mode: "multiple",
      isRequired: true,
      getFieldDecorator: getFieldDecorator,
      fieldName: "groups",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_form__WEBPACK_IMPORTED_MODULE_3__["default"].Item, {
      style: {
        marginTop: 30
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_es_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      block: true,
      type: "primary",
      onClick: this._submitData,
      loading: this.state.loading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, "Add"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AddTeamMember = antd_es_form__WEBPACK_IMPORTED_MODULE_3__["default"].create({
  name: "add-team-member"
})(AddTeamMember));

/***/ }),

/***/ "./src/screens/casePartner/modules/Team/CardTeams.jsx":
/*!************************************************************!*\
  !*** ./src/screens/casePartner/modules/Team/CardTeams.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kallolpratimsaikia_lks_repos_segregator_lcms_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var antd_es_tag_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/tag/style */ "./node_modules/antd/es/tag/style/index.js");
/* harmony import */ var antd_es_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/tag */ "./node_modules/antd/es/tag/index.js");
/* harmony import */ var antd_es_message_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/message/style */ "./node_modules/antd/es/message/style/index.js");
/* harmony import */ var antd_es_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/message */ "./node_modules/antd/es/message/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _asyncActions_team__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../asyncActions/team */ "./src/screens/casePartner/asyncActions/team.js");
/* harmony import */ var components_CardTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/CardTable */ "./src/components/CardTable/index.jsx");
/* harmony import */ var _AddTeam__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AddTeam */ "./src/screens/casePartner/modules/Team/AddTeam.jsx");
/* harmony import */ var api_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! api/user */ "./src/api/user.js");
/* harmony import */ var libs_utils_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! libs/utils/helpers */ "./src/libs/utils/helpers.js");





var _jsxFileName = "/Users/kallolpratimsaikia/lks-repos/segregator-lcms/frontend/src/screens/casePartner/modules/Team/CardTeams.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_kallolpratimsaikia_lks_repos_segregator_lcms_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










const filterOptions = [{
  key: "active",
  label: "ACTIVE"
}, {
  key: "inactive",
  label: "INACTIVE"
}];

class CardTeams extends react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"] {
  constructor(...args) {
    super(...args);

    this._removeGroups = (userId, groupId) => {
      const data = {
        user: userId,
        groups: [groupId]
      };
      let $this = this;
      api_user__WEBPACK_IMPORTED_MODULE_12__["default"].removeGroup(data).then(response => {
        console.log(response.data);
        let params = {
          status: 'active'
        };

        $this._getTeamMembers(params);

        antd_es_message__WEBPACK_IMPORTED_MODULE_4__["default"].success("Team successfully updated");
      });
    };

    this._getTeamMembers = params => {
      this.props.getTeamMembers(params);
    };
  }

  render() {
    const _this$props = this.props,
          team = _this$props.team,
          teamLoading = _this$props.teamLoading,
          getTeamMembers = _this$props.getTeamMembers;
    const columns = [{
      title: "Name",
      dataIndex: "name",
      render: (text, row, value) => react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, row.first_name, " ", row.last_name)
    }, {
      title: "Contact Details",
      dataIndex: "email"
    }, {
      title: "Group",
      dataIndex: "group",
      render: (text, row, value) => {
        let groups = libs_utils_helpers__WEBPACK_IMPORTED_MODULE_13__["UTIL_SCRIPTS"].getUserGroups(row.groups);
        return groups.map((group, index) => react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_tag__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: index,
          closable: true,
          onClose: () => this._removeGroups(row.id, group.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, group.name));
      }
    }, {
      title: "Role",
      dataIndex: "role",
      render: (text, row, value) => {
        let groups = libs_utils_helpers__WEBPACK_IMPORTED_MODULE_13__["UTIL_SCRIPTS"].getUserRoles(row.groups);
        console.log('roles', groups);
        return groups.map((group, index) => react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_es_tag__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, group.label));
      }
    }, {
      title: "Pending Cases",
      dataIndex: "pending_cases"
    }, {
      title: "Due Tasks",
      dataIndex: "due_tasks" // {
      //   title: "Overdue Tasks",
      //   dataIndex: "overdue_tasks"
      // }

    }];
    const results = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(team, "results", []).map(item => {
      return _objectSpread({}, item);
    });
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_CardTable__WEBPACK_IMPORTED_MODULE_10__["default"], {
      loading: teamLoading,
      total: Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(team, "count", 0),
      columns: columns,
      dataSource: results,
      getData: this._getTeamMembers,
      heading: "Team",
      rowKey: "id",
      showFilterSection: true,
      defaultFilter: "active",
      filterOptions: filterOptions,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_AddTeam__WEBPACK_IMPORTED_MODULE_11__["default"], {
      getTeamMembers: this._getTeamMembers,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }));
  }

}

const mapStateToProps = ({
  casePartner: {
    team,
    teamLoading
  }
}) => ({
  team,
  teamLoading
});

const mapDispatchToProps = {
  getTeamMembers: _asyncActions_team__WEBPACK_IMPORTED_MODULE_9__["getTeamMembers"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(CardTeams)));

/***/ })

})
//# sourceMappingURL=main.b1d77d4f2437a2a42ca1.hot-update.js.map