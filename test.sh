#!/bin/bash

# 用法: ./write_index.sh <目标目录>
# 示例: ./write_index.sh /tmp/mydir

# 固定输出到用户目录下的 demo-index.txt
OUTPUT_FILE="$HOME/demo-index.txt"
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")
HOSTNAME=$(hostname)
USER=$(whoami)

cat > "$OUTPUT_FILE" <<EOF
=============================
       到此一游 ✈️
=============================
时间: $TIMESTAMP
用户: $USER
主机: $HOSTNAME
路径: $OUTPUT_FILE
=============================
EOF

echo "✅ 已写入: $OUTPUT_FILE"
cat "$OUTPUT_FILE"
echo "$OUTPUT_FILE"
