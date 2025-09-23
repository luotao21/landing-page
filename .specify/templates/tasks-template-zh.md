# 任务：[功能名称]

**输入**：来自`/specs/[###-功能名称]/`的设计文档
**先决条件**：plan.md（必需）、research.md、data-model.md、contracts/

## 执行流程（主要）

```
1. 从功能目录加载plan.md
   → 如果未找到：错误"未找到实施计划"
   → 提取：技术栈、库、结构
2. 加载可选设计文档：
   → data-model.md：提取实体 → 模型任务
   → contracts/：每个文件 → 合约测试任务
   → research.md：提取决策 → 设置任务
3. 按类别生成任务：
   → 设置：项目初始化、依赖、代码检查
   → 测试：合约测试、集成测试
   → 核心：模型、服务、CLI命令
   → 集成：数据库、中间件、日志
   → 完善：单元测试、性能、文档
4. 应用任务规则：
   → 不同文件 = 标记[P]并行
   → 相同文件 = 顺序（无[P]）
   → 测试在实施之前（TDD）
5. 按顺序编号任务（T001、T002...）
6. 生成依赖图
7. 创建并行执行示例
8. 验证任务完整性：
   → 所有合约都有测试？
   → 所有实体都有模型？
   → 所有端点都实施了？
9. 返回：成功（任务准备执行）
```

## 格式：`[ID] [P?] 描述`

* **[P]**：可以并行运行（不同文件，无依赖）
* 在描述中包含确切文件路径

## 路径约定

* **单一项目**：仓库根目录的`src/`、`tests/`
* **Web应用**：`backend/src/`、`frontend/src/`
* **移动端**：`api/src/`、`ios/src/`或`android/src/`
* 下面显示的路径假设单一项目 - 根据plan.md结构调整

## 阶段3.1：设置

- [ ] T001 根据实施计划创建项目结构
- [ ] T002 使用[框架]依赖初始化[语言]项目
- [ ] T003 [P] 配置代码检查和格式化工具

## 阶段3.2：测试优先（TDD）⚠️ 必须在3.3之前完成

**关键：这些测试必须在任何实施之前编写并必须失败**

- [ ] T004 [P] 在tests/contract/test_users_post.py中合约测试POST /api/users
- [ ] T005 [P] 在tests/contract/test_users_get.py中合约测试GET /api/users/{id}
- [ ] T006 [P] 在tests/integration/test_registration.py中集成测试用户注册
- [ ] T007 [P] 在tests/integration/test_auth.py中集成测试认证流程

## 阶段3.3：核心实施（仅在测试失败后）

- [ ] T008 [P] 在src/models/user.py中的用户模型
- [ ] T009 [P] 在src/services/user_service.py中的UserService CRUD
- [ ] T010 [P] 在src/cli/user_commands.py中的CLI --create-user
- [ ] T011 POST /api/users端点
- [ ] T012 GET /api/users/{id}端点
- [ ] T013 输入验证
- [ ] T014 错误处理和日志

## 阶段3.4：集成

- [ ] T015 将UserService连接到数据库
- [ ] T016 认证中间件
- [ ] T017 请求/响应日志
- [ ] T018 CORS和安全头

## 阶段3.5：完善

- [ ] T019 [P] 在tests/unit/test_validation.py中验证的单元测试
- [ ] T020 性能测试（<200ms）
- [ ] T021 [P] 更新docs/api.md
- [ ] T022 删除重复
- [ ] T023 运行manual-testing.md

## 依赖

* 测试（T004-T007）在实施（T008-T014）之前
* T008阻止T009、T015
* T016阻止T018
* 实施在完善（T019-T023）之前

## 并行示例

```
# 一起启动T004-T007：
任务："在tests/contract/test_users_post.py中合约测试POST /api/users"
任务："在tests/contract/test_users_get.py中合约测试GET /api/users/{id}"
任务："在tests/integration/test_registration.py中集成测试注册"
任务："在tests/integration/test_auth.py中集成测试认证"
```

## 注意事项

* [P]任务 = 不同文件，无依赖
* 在实施前验证测试失败
* 每个任务后提交
* 避免：模糊任务、相同文件冲突

## 任务生成规则

*在main()执行期间应用*


1. **从合约**：
   * 每个合约文件 → 合约测试任务[P]
   * 每个端点 → 实施任务
2. **从数据模型**：
   * 每个实体 → 模型创建任务[P]
   * 关系 → 服务层任务
3. **从用户故事**：
   * 每个故事 → 集成测试[P]
   * 快速开始场景 → 验证任务
4. **排序**：
   * 设置 → 测试 → 模型 → 服务 → 端点 → 完善
   * 依赖阻止并行执行

## 验证检查清单

*门控：main()返回前检查*

- [ ] 所有合约都有对应测试
- [ ] 所有实体都有模型任务
- [ ] 所有测试都在实施之前
- [ ] 并行任务真正独立
- [ ] 每个任务指定确切文件路径
- [ ] 没有任务修改与另一个[P]任务相同的文件


