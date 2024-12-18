var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系\xa0 \n National Formosa University\xa0 Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:\xa0   fqpabi8 \n 個人倉儲: https://github.com/mdecp2024/hw-yoyo77651/ \n 個人網站: https://mdecp2024.github.io/hw-yoyo77651/ \n \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n ________________________________________________________________________________ \n 使用 Codespaces 維護作業倉儲 \n 甚麼是 Codespaces: \n \xa0 \xa0 \xa0 \xa0Codespaces 是 GitHub 提供的一個雲端開發環境，允許開發者在瀏覽器中直接編寫、測試和除錯程式碼。它為用戶提供了一個即時的、可客製化的開發環境，具備以下幾個主要特點： \n \xa0 即時環境 ：用戶可以快速啟動一個新的開發環境，而無需在本地安裝軟體或配置環境。 \n \xa0 雲端執行 ：所有的編輯和執行都是在雲端完成的，因此可以隨時隨地登入 Github 後使用，只需要一個瀏覽器。 \n \xa0 預設配置 ：用戶可以使用預設的開發環境，也可以自定義配置，包括選擇語言、工具和框架 (計算機程式課程採用\xa0 \xa0 Python 程式語言環境, 而且必須利用 pip 安裝執行網頁編輯環境所需模組:\xa0\xa0  pip install flask flask_cors bs4 lxml pelican markdown gevent)。 \n 與 GitHub 整合 ：由於是 GitHub 的一部分，用戶可以直接利用倉儲中 Code 下的 Codespaces 啟動或進入先前已經建立的環境，進行版本控制，無需設定提交帳號與電子郵件等資料或授權管理。 \n 首次建立作業倉儲下的 Codespaces, 必需先在終端機安裝所需模組: pip install flask flask_cors bs4 lxml pelican markdown gevent \n 接著利用 python main.py 啟動編輯網頁, 以 admin 做為管理者密碼登入後, 可以修改動態網站內容. \n 動態網站編輯完成後, 必須利用 Convert 功能將動態網站轉為靜態網站內容 (其實就是將 config/config.htm 透過分頁後, 將靜態網頁檔案存入 content 目錄中. \n \xa0 \n 靜態網頁轉檔完成後, 就可以利用 \n \xa0 \n git add .\xa0 \n \xa0 \n git commit -m "提交訊息" \n \xa0 \n git push \n \xa0 \n 將改版的作業倉儲內容, 從 Codespaces 環境推送到 Github 倉儲區, 接著 Github Pages 就會根據 Settings - Pages 中的設定, 將 main 分支的資料再經過轉檔, 部署到 Pages 的靜態網站中. 而靜態網站的網址將會是 \xa0 https://mdecp2024.github.io/hw- \xa0 後面接上個使用者的 Github 登入帳號. \n \xa0 \n 其實, 任何 Github 的倉儲若已經設定 Pages 要求用特定分支作為網頁根目錄, Github Pages 都會使用 https://github帳號.github.io/倉儲名稱 作為轉檔後的倉儲網頁網址 \n \xa0 \n \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': '虛擬機建立', 'text': '\n', 'tags': '', 'url': '虛擬機建立.html'}, {'title': 'Brython建立', 'text': '\n', 'tags': '', 'url': 'Brython建立.html'}, {'title': 'w10', 'text': '題目一: \n \n Brython頁面 :建立好自己的Brython頁面後直接複製 貼上即可 \n SciTE 編輯器 :新增檔案檔名後一定要加上".py"再複製指令 \n 命令提示字元視窗 :打開cmd視窗輸入 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0cd y:\xa0 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0cd tmp \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0cd python_ex \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0python "剛剛儲存的檔名".py \n Jupyter Lab :先在cmd視窗輸入cd Notebook，再輸入jupyter lab --collaborative \n 便可透過瀏覽器打開Jupyter Lab，新增note將指令貼上並按下執行 \n Codespaces :打開Github執行雲端虛擬機Codespaces，安裝python模組 \n 新增副檔名為.py的檔案並貼上程式碼 再輸入python "檔案名稱".py即可完成 \n 題目二: \n \xa0 \xa0 \xa0 \xa0\xa0 \n \n name  =   "41123242" \n age  =   20 \n _total  =   8888 \n score1  =   1000000 \n \n print ( "正確的變數:" ) \n print ( "name:" , name) \n print ( "age:" , age) \n print ( "_total:" , _total) \n print ( "score1:" , score1) \n \n 執行結果說明： 正確命名：name、age、_total 和 score1 都是有效的變數名稱。 錯誤命名：1name：變數名稱不能以數字開頭。 my-name：變數名稱不能包含 - 符號。 if：不能使用 Python 關鍵字 if 作為變數名稱。 \n 題目三: \n \n \n \n # 已知條件 \n initial_velocity_kmh  =   310  \xa0 # 初速度，公里/小時 \n distance  =   1000  \xa0 # 跑道距離，公尺 \n \n # 將初速度轉換為公尺/秒 \n initial_velocity_ms  =  initial_velocity_kmh  *  ( 1000   /   3600 ) \n \n # 計算加速度 \n acceleration  =   -  (initial_velocity_ms  **   2 )  /  ( 2   *  distance) \n \n # 印出結果 \n print ( "所需的加速度為:" , acceleration,  "m/s²" ) \n \n 心得: \n \xa0  \xa0  \xa0 \xa0 透過這門課學習的Python程式讓我可以更了解如何運用Python去解微積分及物理,過程中還遇到一些小地方沒打好的錯誤但最後還是有利用Python解出第一題 A jet touches down at velocity 310 km/h. Find the constant acceleration required to stop the aircraft 1000 m down the runway.以前都不知道要怎麼運用現在終於學會了 \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11_hw', 'text': '以下影片說明如何利用近端可攜系統維護個人作業網站: \n 1.\xa0 已知可以用 Python 程式 由上往下列印三角形 * , 或 由左往右列印三角形 * , 請將此程式延伸到可以在 10x10 的字元區域中, 以 "*" 字元列印出圓型區域. 完成後請將程式碼存入個人 Gist 後, 直接在個人作業網站中的 Brython 頁面中執行. (提示: ?src=gist_script_URL) \n 第一題網站 \n \n \n 2. 已知可以在網頁中利用 Brython 繪製方格與塗色, 如下連結, 請設法修改此一程式, 直接將程式存入個人的 Gist, 並利用黑色方塊圍出一個圓形區域. \n 第二題網站 \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w13_hw', 'text': '程式連結: \n \xa0 \xa0 \xa0 \xa0   \xa0紅色正方形 \n \xa0 \xa0 \xa0 \xa0  方形重疊 \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w13_ai', 'text': '', 'tags': '', 'url': 'w13_ai.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中.', 'tags': '', 'url': 'HW 2.html'}, {'title': 'w15', 'text': '"從1累加到100" \n sum = 0\nfor i in range(1, 101):\n    sum += i\n\n# 顯示題目\nprint(f"從 1 累加到 100 的總和是：{sum}") \n', 'tags': '', 'url': 'w15.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯.', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};