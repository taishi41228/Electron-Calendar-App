function calendar(s, date) {
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    weekdays = new Array('日', '月', '火', '水', '木', '金', '土');

    if (date == null) {
        date = new Date();
    }

    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();

    this_month = new Date(year, month, 1);
    next_month = new Date(year, month + 1, 1);

    // 曜日
    first_week_day = this_month.getDay();
    days_in_this_month = Math.round((next_month.getTime() - this_month.getTime()) / (1000 * 60 * 60 * 24));

    calendar_html = '<table>';

    // 1行目 年月の表示
    calendar_html += '<tr><td colspan="7">' + year + '年 ' + (month + 1) + '月' + '</td></tr>';
    calendar_html += '<tr>';

    // 2行目 曜日の表示
    calendar_html += '<tr>';
    for (week_day = 0; week_day < 7; week_day++) {
        calendar_html += '<td>' + weekdays[week_day] + '</td>';
    }
    calendar_html += '</tr>';

    // 3行目 先月の最終週
    calendar_html += '<tr>';
    for (week_day = 0; week_day < first_week_day; week_day++) {
        calendar_html += '<td></td>';
    }

    // 3行目~最終行まで
    week_day = first_week_day;
    for (day_counter = 1; day_counter <= days_in_this_month; day_counter++) {
        week_day %= 7;
        if (week_day == 0)
            calendar_html += '</tr><tr>';
        if (day == day_counter) {
            calendar_html += '<td class="current">' + day_counter + '</td>';
        } else {
            calendar_html += '<td>' + day_counter + ' </td>';
        }
        week_day++;
    }
    calendar_html += '</tr>';

    calendar_html += '</table>';

    document.getElementById(s).innerHTML = calendar_html;
}

calendar('cal1', new Date());
setInterval(function () {
    calendar('cal1', new Date());
}, 60000);
